import { Alert  } from 'react-native'
import { observer } from 'mobx-react-lite';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/navigation';
import axios from "axios";
import { NewsItem } from '../../../types/NewsItem';
import CustomButton from '../../../CustomComponents/CustomButton';
import CustomView from '../../../CustomComponents/CustomView';
import CustomText from '../../../CustomComponents/CustomText';
import CustomInput from '../../../CustomComponents/CustomInput';
import getNewsStore from '../../../stores/newsStore';
import getLoginStore from '../../../stores/loginStore';
import getThemeStore from '../../../stores/themeStore';
import { darkMode, lightMode } from '../../colors/colors';


const AddNewsPopUp : React.FC = observer(() => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const handleSubmit = async () => {
        if (getNewsStore().news.get()) {
            try {
                await handleAddNews();
                const newsItem: NewsItem = {
                    user_name: getLoginStore().user_name.get(),
                    date_of_news: getNewsStore().date.get(),
                    news_content: getNewsStore().news.get()
                }
                getNewsStore().addNews(newsItem);
                Alert.alert('Success', 'News added successfully');
                navigation.goBack();
            } catch ( error ) {
                console.log("Error in handling add news!" , error)
            }      
        } else {
            Alert.alert('Error' , 'Please Enter the news');
        }        
    }

    const handleAddNews = async () : Promise<void> => {
        try {
            const IP_ADDRESS : string = "192.168.1.108"
            if( getLoginStore().user_id.get() !== -1)
            {
                await axios.post(`http://${IP_ADDRESS}:3000/api/addNews`, {
                    user_id: getLoginStore().user_id.get(),
                    news_content : getNewsStore().news.get()
                });
            }
        } catch ( error ) {
            console.error("Error while adding News" , error);
        }
    }
    const theme = getThemeStore().isDarkThemeEnabled.get() ? darkMode : lightMode;

   return (
        <CustomView
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.backGroundColor,
                height: '100%'
            }}
        >
            <CustomView style={{
                marginBottom: 50,
                marginLeft: 50,
                marginRight: 50
            }}>
                <CustomInput 
                    style={{
                        width: 350,
                        borderColor: theme.borderColor,
                    }}
                    height={200}
                    margin={30}
                    marginRight={30}
                    borderRadius={10}
                    borderWidth={5}
                    padding={10}
                    value={getNewsStore().news.get()}
                    onChangeText={(news : string) => getNewsStore().setNews(news)}
                    placeholder="Enter your news" 
                    placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
                    keyboardType="default"  
                    secureTextEntry={false}
                />
            </CustomView>
            <CustomView 
          style={{
            paddingBottom:0,
            marginLeft:5
          }}
        >
            <CustomButton onPress={handleSubmit}
                style={{ 
                        backgroundColor: getThemeStore().isDarkThemeEnabled.get() ? darkMode.borderColor : lightMode.borderColor,
                        marginBottom: 300 ,
                        borderRadius: 30,
                        width: 300
                    }}
                height={60}
                width={400}
                
            >
                <CustomView 
                    style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                >
                    <CustomText
                        style={{
                            color: 'black',
                            marginTop:15,
                            marginLeft:115}}
                        fontSize={20}
                        fontWeight='300'
                    >Submit</CustomText>
                </CustomView>
            </CustomButton>
          </CustomView>
         </CustomView>
   )
})

export default AddNewsPopUp
