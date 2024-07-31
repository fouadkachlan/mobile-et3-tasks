import React from 'react'
import Settings from './client/src/Components/SettingsPage/Settings'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomingScreen from './client/src/Components/WelcomingPage/WelcomingScreen'
import Login from './client/src/Components/LoginPage/Login'
import CreateAccount from './client/src/Components/SignUpPage/CreateAccount'
import ForgotPassword from './client/src/Components/LoginPage/ForgotPassword'
import UserProfile from './client/src/Components/Profile/UserProfile'
import HomeNewsScreen from './client/src/Components/HomePage/HomeNewsScreen'
import AddNewsPopUp from './client/src/Components/HomePage/NewsPopUp/AddNewsPopUp'
import { observer } from 'mobx-react-lite'
import getAuthStore from './client/src/stores/authenticationStore'



const App : React.FC =  observer(()=> {
  const Stack = createNativeStackNavigator();  


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= { !(getAuthStore().isAuthenticated.get()) ? "HomeNewsScreen" : "Welcoming" }>
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
  )
})

export default App