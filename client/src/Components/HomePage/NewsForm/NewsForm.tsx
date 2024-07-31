import React from 'react'
import {NewsFormProps} from '../../../types/NewsFormProps';
import { observer } from 'mobx-react-lite';
import CustomView from '../../../CustomComponents/CustomView';
import CustomText from '../../../CustomComponents/CustomText';
import getThemeStore from '../../../stores/themeStore';
import { darkMode, lightMode } from '../../colors/colors';

const NewsForm : React.FC<NewsFormProps> = observer(({newsItem}) => {

  return (
    <CustomView
    style={{
        marginTop: 30,
        marginLeft: 5,
        marginRight: 5,
        display: "flex",
        borderColor: getThemeStore().isDarkThemeEnabled.get() ? darkMode.borderColor :'#77E4C8',
        borderWidth: 2,
        borderRadius:10,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    }}>
      
      <CustomView style ={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 20
        }}>
          
        <CustomText style ={{color : getThemeStore().isDarkThemeEnabled.get() ? darkMode.fontColor : lightMode.fontBlackColor}} 
        fontWeight='bold'
        fontSize={10}
        >
          Written By : {newsItem.user_name}
        </CustomText>
        <CustomText style ={{color : getThemeStore().isDarkThemeEnabled.get() ? darkMode.fontColor : lightMode.fontBlackColor}} 
        fontWeight='bold'
        fontSize={10}
        >Written at {new Date(newsItem.date_of_news).toDateString()}
        </CustomText>
      </CustomView>
      <CustomText
      style={{
        color : getThemeStore().isDarkThemeEnabled.get() ? darkMode.fontColor : lightMode.fontBlackColor
      }}
        fontSize={20}
        fontWeight='400'
      >
          {newsItem.news_content}
      </CustomText>
    </CustomView>
  )
})

export default NewsForm