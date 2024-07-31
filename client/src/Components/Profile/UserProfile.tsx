import { Image } from 'react-native'
import React from 'react'
import axios from "axios"
import { observer } from 'mobx-react-lite'
import CustomText from '../../CustomComponents/CustomText'
import CustomView from '../../CustomComponents/CustomView'
import { darkMode, lightMode } from '../colors/colors'
import getLoginStore from '../../stores/loginStore'
import getThemeStore from '../../stores/themeStore'
const userImage = require("../../../../assets/userImage.png")

const UserProfile : React.FC= observer(() => {
  const handleProfileFetch  = async () : Promise<void>  => {
    const IP_ADDRESS : string = "192.168.1.108"
    try {
      const response = await axios.post(`http://${IP_ADDRESS}:3000/api/getUserProfileData` , {
        user_email : getLoginStore().user_email.get(),
        user_name : getLoginStore().user_name.get(),
        user_phone_number : getLoginStore().user_phone_number.get(),
        user_country : getLoginStore().user_country.get(),
      } );
      const data = response.data;
      getLoginStore().setProfileData(data.user_email , data.user_name  , data.user_phone_number , data.user_country);
    } catch ( error ) {
      console.error("Error fetching profile ,",error);
    }
  } 
  React.useEffect(() => {
    handleProfileFetch();
  } , []);
  const theme = getThemeStore().isDarkThemeEnabled.get() ? darkMode : lightMode;
  return (
    <CustomView
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.backGroundColor ,
        height: 750

      }}
    >
      <CustomView
        style ={{
          display: 'flex',
          justifyContent: 'center',
          alignItems:'center'
        }}
      >
      <CustomText
        style={{
          color: theme.fontColor,
          marginBottom: 50
        }}
        fontSize={30}
        fontWeight="bold"
      >
        This is my Profile
      </CustomText>
      </CustomView>
      <CustomView
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image 
          style={{
            height: 200,
            width: 200,
            margin: 20
          }}
          source={userImage} />
      </CustomView>
      <CustomView style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderWidth: 2,
        borderColor: theme.borderColor,
        margin: 20
      }}>
        <CustomText style={{
          color: getThemeStore().isDarkThemeEnabled.get() ? darkMode.fontColor : lightMode.fontBlackColor
        }} fontSize={15} fontWeight='300'>
          Username: {getLoginStore().user_name.get()}
        </CustomText>
      </CustomView>
      <CustomView style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderWidth: 2,
        borderColor: theme.borderColor,
        margin: 20
      }}>
        <CustomText style={{
          color: getThemeStore().isDarkThemeEnabled.get() ? darkMode.fontColor : lightMode.fontBlackColor
        }} fontSize={15} fontWeight='300'>
          Email: {getLoginStore().user_email.get()}
        </CustomText>
      </CustomView>
      <CustomView style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderWidth: 2,
        borderColor:theme.borderColor,
        margin: 20
      }}>
        <CustomText style={{
          color: getThemeStore().isDarkThemeEnabled.get() ? darkMode.fontColor : lightMode.fontBlackColor
        }} fontSize={15} fontWeight='300'>
          Phone Number: {getLoginStore().user_phone_number.get()}
        </CustomText>
      </CustomView>
      <CustomView style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderWidth: 2,
        borderColor:theme.borderColor,
        margin: 20
      }}>
        <CustomText style={{
          color: getThemeStore().isDarkThemeEnabled.get() ? darkMode.fontColor : lightMode.fontBlackColor
        }} fontSize={15} fontWeight='300'>
          Country: {getLoginStore().user_country.get()}
        </CustomText>
      </CustomView>
  
    </CustomView>
  )
})

export default UserProfile
