import { ScrollView, TouchableOpacity } from 'react-native'
import  React , {useEffect}  from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../types/navigation'
import NewsForm from './NewsForm/NewsForm';
import { observer } from 'mobx-react-lite'
import Navigation from '../Navigation/Navigation'
import axios from 'axios'
import { NewsItem } from '../../types/NewsItem'
import getNewsStore from '../../stores/newsStore'
import CustomText from '../../CustomComponents/CustomText'
import CustomView from '../../CustomComponents/CustomView'
import getThemeStore from '../../stores/themeStore';
import { darkMode, lightMode } from '../colors/colors';
import { Dimensions } from 'react-native';

const HomeNewsScreen : React.FC = observer(() => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const newsInformations = async() : Promise<void> => {
        const IP_ADDRESS : string = "192.168.1.108"
        try
        {
          const response = await axios.post<NewsItem[]>(`http://${IP_ADDRESS}:3000/api/news`)
          console.log("Home News Screen :   ",response.data)
          getNewsStore().setNewsList(response.data);          
        } catch ( error ) {
          console.error("Failed Fetching News Information" , error);
        }
      }
      useEffect(() =>{
        newsInformations();
        console.log("NewsList in the store:", getNewsStore().newsList.get())
      },[])

      const theme = getThemeStore().isDarkThemeEnabled.get() ? darkMode : lightMode;
      const windowWidth = Dimensions.get("window").width;
      const windowHeight = Dimensions.get("window").height;
  return (
   <ScrollView style={{
        backgroundColor: theme.backGroundColor,
        width: windowWidth,
        height: windowHeight
    }}>
        <Navigation />
            <CustomView
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    marginTop: 10,
                    marginRight: 10
                }}
            >
                <CustomView
                        style={{
                            display: 'flex',
                            justifyContent:'center',
                            alignSelf:'center',
                            alignItems: 'center'
                        }}
                        
                    >
                        <CustomText
                            style={{
                                color: theme.fontColor
                            }}
                            fontSize={25}
                            fontWeight='500'
                        >
                            The number of News is {getNewsStore().newsCount.get()}
                        </CustomText>
                    </CustomView>
                <TouchableOpacity onPress={()=>navigation.navigate("AddNewsPopUp")}>
                    
                    <CustomView
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center', 
                            height:50,
                            width: 150,
                            borderRadius: 10,
                            backgroundColor: getThemeStore().isDarkThemeEnabled.get() ? "white"  :'#77E4C8',
                            marginTop: 20
                        }}
                    >
                        <CustomText
                            fontSize={20}
                            fontWeight="400"
                            style={{
                                color: 'black'
                            }}
                        >Add News</CustomText>
                    </CustomView>
                </TouchableOpacity>
            </CustomView>
            {getNewsStore().newsList.get().map((newsItem : NewsItem , index : number ) => (
                <NewsForm key={index} newsItem={newsItem} />
            ))}
   </ScrollView>
  )
})

export default HomeNewsScreen