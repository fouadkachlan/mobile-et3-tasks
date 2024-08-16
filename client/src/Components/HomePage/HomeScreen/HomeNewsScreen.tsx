import { RefreshControl, ScrollView } from 'react-native'
import  React , {useContext, useEffect}  from 'react'
import { observer } from 'mobx-react-lite'
import getRequestStore from '../../../stores/requestsStore';
import getDimensionsStore from '../../../stores/dimensionsStore';
import HomeScreenHeader from './Header/HomeScreenHeader';
import HomeScreenNewsList from './List/HomeScreenNewsList';
import { ThemeContext } from '../../ThemeContext/ThemeContext';
import getRefreshStore from '../../../stores/refreshStore';


const HomeNewsScreen : React.FC = observer(() => {

    const newsInformations = async() : Promise<void> => {
        try
        {
          await getRequestStore().fetchNewsRequest()      
        } catch ( error ) {
          console.error("Failed Fetching News Information" , error);
        }
      }
      useEffect(() =>{
        newsInformations();
      },[])
      const onRefresh = React.useCallback(() => {
        getRefreshStore().setRefreshToTrue();
        setTimeout(() => {
        getRefreshStore().setRefreshToFalse();
        }, 2000)
      } , [])
      const {theme} = useContext(ThemeContext);
  return (
    <RefreshControl refreshing={getRefreshStore().refresh.get()} onRefresh={onRefresh}>
        <ScrollView style={{
            backgroundColor: theme.backGroundColor,
            display: 'flex',
            width: getDimensionsStore().windowWidth,
            height: getDimensionsStore().windowHeight 
          }}>
          <HomeScreenHeader />
          <HomeScreenNewsList />
        </ScrollView>
    </RefreshControl>
    
  )
})

export default HomeNewsScreen