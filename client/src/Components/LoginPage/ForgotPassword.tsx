import { observer } from 'mobx-react-lite'
import React from 'react'
import CustomButton from '../../CustomComponents/CustomButton'
import CustomView from '../../CustomComponents/CustomView'
import CustomText from '../../CustomComponents/CustomText'
import CustomInput from '../../CustomComponents/CustomInput'
import getLoginStore from '../../stores/loginStore'
import getThemeStore from '../../stores/themeStore'
import { darkMode, lightMode } from '../colors/colors'


const ForgotPassword : React.FC = observer(() => {
  const theme = getThemeStore().isDarkThemeEnabled.get() ? darkMode : lightMode;
  return (
    <CustomView style={{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:50,
        height: '100%',
        backgroundColor: theme.backGroundColor
       }} >
        <CustomText 
            style={{
              color : theme.fontColor,
              width: 400,
              marginLeft: 20
            }}
            fontSize={40}
            fontWeight={'bold'}
        >Forgot Password</CustomText>

        <CustomText
          style={{color : getThemeStore().isDarkThemeEnabled.get() ? darkMode.fontColor : "black"}}
          fontSize={15}
          fontWeight={'300'}
        >
          Type your email to be able to send you a link to reset your password
        </CustomText>
        <CustomText
          style={{
            color: theme.fontColor,
             marginTop: 90,
             marginRight: 150,
             width: 200
            }}
          fontSize={20}
          fontWeight={'500'}
        >
          Email Address
        </CustomText>

      <CustomInput 
        style={{
          borderColor : theme.fontColor,
          marginBottom:100,
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
        <CustomView 
          style={{
            paddingBottom:0,
            marginLeft:5
          }}
        >
            <CustomButton 
                style={{
                  backgroundColor: getThemeStore().isDarkThemeEnabled.get() ? darkMode.borderColor : lightMode.fontColor,
                  marginBottom: 35,
                  borderRadius: 30
                }}
                height={60}
                width={350}
                
            >
                <CustomView 
                    style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}
                >
                    <CustomText
                        style={{
                          
                          color: 'black',
                          marginTop:15,
                          marginLeft:135
                        }}
                        fontSize={20}
                        fontWeight='300'
                    >Submit</CustomText>
                </CustomView>
            </CustomButton>
          </CustomView>
          

    </CustomView>
  )
})
export default ForgotPassword