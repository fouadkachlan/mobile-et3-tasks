import {  TouchableOpacity } from 'react-native'
import  React, { useContext }   from 'react'
import Navigation from '../../../Navigation/Navigation'
import getNewsStore from '../../../../stores/newsStore'
import CustomText from '../../../../CustomComponents/CustomText'
import CustomView from '../../../../CustomComponents/CustomView'
import getThemeStore from '../../../../stores/themeStore';
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../../../types/navigation'
import { ThemeContext } from '../../../ThemeContext/ThemeContext'
import { addNewsText, newsNumberText } from '../../../Constant/constants'


const HomeScreenHeader : React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const {theme} = useContext(ThemeContext);
  return (
  <CustomView style={{}}>
        <Navigation />
            <CustomView
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    // marginTop: 10,
                    // marginRight: 10
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
                           {newsNumberText} {getNewsStore().newsCount.get()}
                        </CustomText>
                    </CustomView>
                <TouchableOpacity onPress={()=>navigation.navigate("AddNewsPopUp" , "AddNewsPopUp")}>

                    
                    <CustomView
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center', 
                            height:50,
                            width: 150,
                            borderRadius: 10,
                            backgroundColor: getThemeStore().isDarkThemeEnabled.get() ? "white"  :'#77E4C8',
                            margin: '5%'
                        }}
                    >
                        <CustomText
                            fontSize={20}
                            fontWeight="400"
                            style={{
                                color: 'black'
                            }}
                        >{addNewsText}</CustomText>
                    </CustomView>
                </TouchableOpacity>
            </CustomView>
    </CustomView>
  )
}

export default HomeScreenHeader