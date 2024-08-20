import { RefreshControl, ScrollView } from 'react-native'
import  React , {useContext, useEffect}  from 'react'
import { observer } from 'mobx-react-lite'
import getRequestStore from '../../../stores/requestsStore';
import getDimensionsStore from '../../../stores/dimensionsStore';
import HomeScreenHeader from './Header/HomeScreenHeader';
import HomeScreenNewsList from './List/HomeScreenNewsList';
import getRefreshStore from '../../../stores/refreshStore';
import { useTheme } from '../../ThemeContext/ThemeContext';
import getNewsStore from '../../../stores/newsStore';


const HomeNewsScreen : React.FC = observer(() => {

    
      useEffect(() =>{
        getNewsStore().newsInformations();
      },[])
      const onRefresh = React.useCallback(() => {
        getRefreshStore().setRefreshToTrue();
        setTimeout(() => {
        getRefreshStore().setRefreshToFalse();
        }, 2000) // clear timeout
      } , [])
      const {theme} = useTheme();
  return (
    <RefreshControl refreshing={getRefreshStore().refresh.get()} onRefresh={onRefresh}>
        <ScrollView style={{
            backgroundColor: theme.backGroundColor,
            display: 'flex',
            width: getDimensionsStore().windowWidth,
            height: getDimensionsStore().windowHeight, 
          }}>
          <HomeScreenHeader />
          <HomeScreenNewsList />
        </ScrollView>
    </RefreshControl>
    
  )
})

export default HomeNewsScreen