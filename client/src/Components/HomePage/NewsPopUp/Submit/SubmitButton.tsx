import { View, Text, Alert } from 'react-native'
import React, { useContext } from 'react'
import CustomView from '../../../../CustomComponents/CustomView'
import CustomButton from '../../../../CustomComponents/CustomButton'
import { ThemeContext } from '../../../ThemeContext/ThemeContext'
import { submitText } from '../../../Constant/constants'
import CustomText from '../../../../CustomComponents/CustomText'
import getNewsStore from '../../../../stores/newsStore';
import getLoginStore from '../../../../stores/loginStore'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../../../types/navigation'
import {NewsItem} from "../../../../types/NewsItem"
import getRequestStore from '../../../../stores/requestsStore'
import { observer } from 'mobx-react-lite'

const SubmitButton = observer(() => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const {theme} = useContext(ThemeContext);
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
            if( getLoginStore().user_id.get() !== -1)
            {
              await getRequestStore().addNewsRequest();
            }
        } catch ( error ) {
            console.error("Error while adding News" , error);
        }
    }
  return (
    <CustomView 
          style={{}}
        >
            <CustomButton onPress={handleSubmit}
                style={{ 
                        backgroundColor: theme.borderColor,
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
                            marginLeft:115
                        }}
                        fontSize={20}
                        fontWeight='300'
                    >{submitText}</CustomText>
                </CustomView>
            </CustomButton>
          </CustomView>
  )
})

export default SubmitButton