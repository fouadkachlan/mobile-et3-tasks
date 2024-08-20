import {  TouchableOpacity } from 'react-native'
import  React, { useContext }   from 'react'
import Navigation from '../../../Navigation/Navigation'
import getNewsStore from '../../../../stores/newsStore'
import CustomText from '../../../../CustomComponents/CustomText'
import CustomView from '../../../../CustomComponents/CustomView'
import getThemeStore from '../../../../stores/themeStore';
import { addNewsText, newsNumberText } from '../../../Constant/constants'
import getNavigationStore from '../../../../stores/navigationStore'
import { useTheme } from '../../../ThemeContext/ThemeContext'


const HomeScreenHeader : React.FC = () => {
    const {theme} = useTheme();
  return (
  <CustomView style={{}}>
        <Navigation />
            <CustomView
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end'
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
                <TouchableOpacity onPress={()=>getNavigationStore().navigateToAddPopUp()}>

                    
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