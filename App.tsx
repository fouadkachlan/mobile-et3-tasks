import React, { ErrorInfo, useCallback, useEffect, useRef } from 'react'
import Settings from './client/src/Components/SettingsPage/Settings'
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomingScreen from './client/src/Components/WelcomingPage/WelcomingScreen'
import Login from './client/src/Components/LoginPage/Login'
import CreateAccount from './client/src/Components/SignUpPage/CreateAccount'
import ForgotPassword from './client/src/Components/LoginPage/Forgot Pass/ForgotPassword'
import UserProfile from './client/src/Components/Profile/UserProfile'
import HomeNewsScreen from './client/src/Components/HomePage/HomeScreen/HomeNewsScreen'
import AddNewsPopUp from './client/src/Components/HomePage/NewsPopUp/AddNewsPopUp'
import { observer } from 'mobx-react-lite'
import  { mmkvAuth } from './client/src/stores/authenticationStore'
import { ThemeProvider } from './client/src/Components/ThemeContext/ThemeProvider'
import { mmkv } from './client/src/Components/MmkvStorage/mmkv'
import getThemeStore from './client/src/stores/themeStore'
import { Alert } from 'react-native'
import ChangeProfile from './client/src/Components/SettingsPage/ChangeProfile/ChangeProfile'
import ChangeUsername from './client/src/Components/SettingsPage/ChangeProfile/ChangeUserName/ChangeUsername'
import ChangeEmail from './client/src/Components/SettingsPage/ChangeProfile/ChangeEmail/ChangeEmail'
import ChangeCountry from './client/src/Components/SettingsPage/ChangeProfile/ChangeCountry/ChangeCountry'
import ChangeNumber from './client/src/Components/SettingsPage/ChangeProfile/ChangePhoneNumber/ChangeNumber'
import getNavigationStore from './client/src/stores/navigationStore'
import { RootStackParamList } from './client/src/types/navigation'

const App : React.FC =  observer(()=> {
  const Stack = createNativeStackNavigator();
  const navigationRef = useRef<NavigationContainerRef<RootStackParamList> | null>(null);
  useEffect(() => {
    try {
      const storedTheme = mmkv.getBoolean('themeEnabled');
      console.log('Retrieved storedTheme:', storedTheme);
      if (storedTheme !== undefined) {
        getThemeStore().setThemeEnabled(storedTheme ? "dark" : "light");
      } else {
        console.log('No stored theme found, defaulting to false');
      }
    } catch (error) {
      console.error('Error retrieving themeEnabled from MMKV:', error);
      Alert.alert('Error', 'Failed to retrieve theme setting.');
    }
  }, []);
  useEffect(() => {
    getNavigationStore().setNavigationRef(navigationRef.current)
  })
  return (
        <ThemeProvider>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={"Welcoming"} >
              <Stack.Screen name="Welcoming" component={WelcomingScreen} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="CreateAccount" component={CreateAccount} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
              <Stack.Screen name="HomeNewsScreen" component={HomeNewsScreen} />
              <Stack.Screen name="Settings" component={Settings} />
              <Stack.Screen name="userProfile" component={UserProfile} />
              <Stack.Screen name="AddNewsPopUp" component={AddNewsPopUp} />
              <Stack.Screen name="ChangeProfile" component={ChangeProfile} /> 
              <Stack.Screen name="Changeusername" component={ChangeUsername} />
              <Stack.Screen name="ChangeEmailAddress" component={ChangeEmail} />
              <Stack.Screen name="ChangeCountry" component={ChangeCountry} />
              <Stack.Screen name="ChangePhoneNumber" component={ChangeNumber} />
            </Stack.Navigator>
         </NavigationContainer>
        </ThemeProvider>
  )
})

export default App