import React, { useContext } from 'react'
import {NewsFormProps} from '../../../types/NewsFormProps';
import { observer } from 'mobx-react-lite';
import CustomView from '../../../CustomComponents/CustomView';
import CustomText from '../../../CustomComponents/CustomText';
import { newsWrittenAt, newsWrittenBy } from '../../Constant/constants';
import getDimensionsStore from '../../../stores/dimensionsStore';
import { useTheme } from '../../ThemeContext/ThemeContext';

const NewsForm : React.FC<NewsFormProps> = observer(({newsItem}) => {
  const {theme} = useTheme()

  return (
    <CustomView
    style={{
        display: "flex",
        justifyContent: 'space-between',
        borderColor: theme.borderColor,
        borderWidth: 2,
        borderRadius:10,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: '5%',
        width: getDimensionsStore().windowWidth / 1.1,
        marginBottom: getDimensionsStore().windowWidth * 0.05
    }}>
      
      <CustomView style ={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        }}>
          
        <CustomText style ={{color : theme.fontBlackColor}} 
        fontWeight='bold'
        fontSize={10}
        >
          {newsWrittenBy} {newsItem.user_name}
        </CustomText>
        <CustomText style ={{color : theme.fontColor}} 
        fontWeight='bold'
        fontSize={10}
        >{newsWrittenAt} {new Date(newsItem.date_of_news).toDateString()}
        </CustomText>
      </CustomView>
      <CustomText
      style={{
        color : theme.fontColor
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