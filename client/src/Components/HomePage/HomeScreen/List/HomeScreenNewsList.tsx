import { View, Text } from 'react-native'
import React from 'react'
import CustomView from '../../../../CustomComponents/CustomView'
import getNewsStore from '../../../../stores/newsStore'
import NewsForm from '../../NewsForm/NewsForm'
import { NewsItem } from '../../../../types/NewsItem'
import { observer } from 'mobx-react-lite'
import getDimensionsStore from '../../../../stores/dimensionsStore'
const HomeScreenNewsList : React.FC = observer(() => {
  return (
    <CustomView style={{
      display: 'flex',
      padding : '5%',
      flexDirection: 'column',
      margin: 'auto',
      height: getDimensionsStore().windowHeight * 0.9
    }}>
        {getNewsStore().newsList.get().map((newsItem : NewsItem , index : number ) => (
                <NewsForm key={index} newsItem={newsItem} />
            ))}
    </CustomView>
  )
})

export default HomeScreenNewsList