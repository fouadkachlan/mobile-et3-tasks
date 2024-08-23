import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import CustomView from '../../../CustomComponents/CustomView'
import CustomText from '../../../CustomComponents/CustomText'
import CustomInput from '../../../CustomComponents/CustomInput'
import getLoginStore from '../../../stores/loginStore'
import getThemeStore from '../../../stores/themeStore'
import { emailAddressText, forgotPasswordMessage } from '../../Constant/constants'
import getDimensionsStore from '../../../stores/dimensionsStore'
import SubmitForgotButton from './SubmitButton/SubmitForgotButton'
import { useTheme } from '../../ThemeContext/ThemeContext'
import { useTranslation } from 'react-i18next'


const ForgotPassword : React.FC = observer(() => {
  const {theme} = useTheme();
  const {t} = useTranslation();
  return (
    <CustomView style={{
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
        height: '100%',
        backgroundColor: theme.backGroundColor,
        gap: getDimensionsStore().windowWidth * 0.11
       }} >
        <CustomText 
            style={{
              color : theme.fontColor,
              width: getDimensionsStore().windowWidth ,
            }}
            fontSize={40}
            fontWeight={'bold'}
        >{t("forgot-pass")}</CustomText>

        <CustomText
          style={{color : theme.fontColor}}
          fontSize={15}
          fontWeight={'300'}
        >
          {t("ForgotUserMessage")}
        </CustomText>
        <CustomView style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          width: getDimensionsStore().windowWidth 

        }}>
        <CustomText
          style={{
            color: theme.fontColor,
             width: getDimensionsStore().windowWidth,
             marginLeft: getDimensionsStore().windowWidth * 0.07
            }}
          fontSize={20}
          fontWeight={'500'}
        >
          {t("email")}
        </CustomText>

      <CustomInput 
        style={{
          borderColor : theme.fontColor,
          marginBottom:'50%',
          width:getDimensionsStore().windowWidth * 0.9
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
        </CustomView>
        <SubmitForgotButton />
          

    </CustomView>
  )
})
export default ForgotPassword