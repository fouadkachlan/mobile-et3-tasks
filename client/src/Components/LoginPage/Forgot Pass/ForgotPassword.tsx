import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import CustomView from '../../../CustomComponents/CustomView'
import CustomText from '../../../CustomComponents/CustomText'
import CustomInput from '../../../CustomComponents/CustomInput'
import getLoginStore from '../../../stores/loginStore'
import getThemeStore from '../../../stores/themeStore'
import { ThemeContext } from '../../ThemeContext/ThemeContext'
import { emailAddressText, forgotPasswordMessage } from '../../Constant/constants'
import getDimensionsStore from '../../../stores/dimensionsStore'
import SubmitForgotButton from './SubmitButton/SubmitForgotButton'


const ForgotPassword : React.FC = observer(() => {
  const {theme} = useContext(ThemeContext);
  return (
    <CustomView style={{
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
        height: '100%',
        backgroundColor: theme.backGroundColor,
       }} >
        <CustomText 
            style={{
              color : theme.fontColor,
              width: getDimensionsStore().windowWidth ,
            }}
            fontSize={40}
            fontWeight={'bold'}
        >{forgotPasswordMessage.forgotPasswordMessage}</CustomText>

        <CustomText
          style={{color : theme.fontColor}}
          fontSize={15}
          fontWeight={'300'}
        >
          {forgotPasswordMessage.userMessage}
        </CustomText>
        <CustomText
          style={{
            color: theme.fontColor,
             width: getDimensionsStore().windowWidth 
            }}
          fontSize={20}
          fontWeight={'500'}
        >
          {emailAddressText}
        </CustomText>

      <CustomInput 
        style={{
          borderColor : theme.fontColor,
          marginBottom:'50%',
          width:350
        }}
        height={70}
        margin={20}
        marginRight={30}
        borderRadius={10}
        borderWidth={2}
        padding={10}
        value={getLoginStore().user_email.get()}
        onChangeText={getLoginStore().setEmail}
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
        placeholder="hello@example.com" 
        keyboardType="email-address"  
        secureTextEntry={false}

        />
        <SubmitForgotButton />
          

    </CustomView>
  )
})
export default ForgotPassword