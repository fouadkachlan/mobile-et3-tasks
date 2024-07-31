import { Image , TouchableOpacity } from 'react-native'
import React from 'react'
import CustomView from '../../CustomComponents/CustomView'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../types/navigation'
import { observer } from 'mobx-react-lite'
import getLoginStore from '../../stores/loginStore'
import getThemeStore from '../../stores/themeStore'
import { darkMode, lightMode } from '../colors/colors'
import getAuthStore from '../../stores/authenticationStore'
const userImage = require("../../../../assets/userImage.png")
const settingImage = require("../../../../assets/settings.png")
const  logoutImage = require("../../../../assets/logout.png"); 



const Navigation : React.FC= observer(() => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const handleLogout = () => {
        getLoginStore().resetCredentials();
        getAuthStore().logout();
        navigation.navigate("Login");
    }
    const theme = getThemeStore().isDarkThemeEnabled.get() ? darkMode : lightMode; 
  return (
    <CustomView
            style={{
                
            }}
        >
            <CustomView
                style={{
                    display: 'flex',
                   
                }}
            >
                <CustomView
                style={{
                    backgroundColor:theme.navigationColor,
                    display: 'flex',
                    justifyContent:'center',
                    flexDirection: 'row',
                    gap: 120
                }}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("userProfile")}}>
                        <Image style={{
                            height: 40,
                            width: 40,
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 5,
                        }} source={userImage} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                        <Image style={{
                            height: 40,
                            width: 40,
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 5,
                        }} source={settingImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleLogout}>
                        <Image style={{
                            height: 40,
                            width: 40,
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 5, 
                        }} source={logoutImage} />
                    </TouchableOpacity>
                </CustomView>
            </CustomView>
    </CustomView>
  )
})

export default Navigation