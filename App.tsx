import React, { useCallback, useEffect } from 'react'
import Settings from './client/src/Components/SettingsPage/Settings'
import { NavigationContainer } from '@react-navigation/native'
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


const App : React.FC =  observer(()=> {
  const Stack = createNativeStackNavigator();
  const storedToken : string | undefined = mmkvAuth.getString('authToken');
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
  return (
        <ThemeProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={storedToken ? "HomeNewsScreen" : "Welcoming"} >
              <Stack.Screen name="Welcoming" component={WelcomingScreen} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="CreateAccount" component={CreateAccount} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
              <Stack.Screen name="HomeNewsScreen" component={HomeNewsScreen} />
              <Stack.Screen name="Settings" component={Settings} />
              <Stack.Screen name="userProfile" component={UserProfile} />
              <Stack.Screen name="AddNewsPopUp" component={AddNewsPopUp} />              
            </Stack.Navigator>
         </NavigationContainer>
        </ThemeProvider>
  )
})

export default App