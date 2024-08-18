import React, { useContext } from 'react';
import { TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import { observer } from 'mobx-react-lite';
import CustomButton from '../../CustomComponents/CustomButton';
import CustomView from '../../CustomComponents/CustomView';
import CustomText from '../../CustomComponents/CustomText';
import CustomInput from '../../CustomComponents/CustomInput';
import getLoginStore from '../../stores/loginStore';
import getThemeStore from '../../stores/themeStore';
import getDimensionsStore from '../../stores/dimensionsStore';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import {
  createAccountText,
  emailAddressText,
  forgotPasswordMessage,
  loginMessage,
  signInChoice,
  welcomingMessage,
} from '../Constant/constants';
import getNavigationStore from '../../stores/navigationStore';
const googleImage = require('../../../../assets/google-symbol.png');
const Login: React.FC = observer(() => {
  const handlePress = async () : Promise<void> => {
    try {
      getLoginStore().handleLogin();

    } catch ( error ) {
      Alert.alert("Error" , "Error while Logging In")
    }
  }
  const { theme } = useContext(ThemeContext);

  return (
    <CustomView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: theme.backGroundColor,
      }}
    >
      <CustomText
        style={{
          color: theme.fontColor,
          textAlign: 'center',
          marginBottom: getDimensionsStore().windowHeight * 0.02,
        }}
        fontSize={50}
        fontWeight={'bold'}
      >
        {loginMessage}
      </CustomText>

      <CustomText
        style={{
          color: theme.fontColor,
          textAlign: 'center',
          marginBottom: getDimensionsStore().windowHeight * 0.05,
        }}
        fontSize={20}
        fontWeight={'400'}
      >
        {welcomingMessage}
      </CustomText>

      <CustomText
        style={{
          color: theme.fontColor,
          marginHorizontal: getDimensionsStore().windowWidth * 0.1,
          marginTop: getDimensionsStore().windowHeight * 0.05,
        }}
        fontSize={20}
        fontWeight={'500'}
      >
        {emailAddressText}
      </CustomText>

      <CustomInput
        style={{
          borderColor: theme.fontColor,
          marginHorizontal: getDimensionsStore().windowWidth  * 0.1,
          marginVertical: getDimensionsStore().windowHeight * 0.01,
          borderRadius: 10,
          borderWidth: 2,
          padding: 10,
        }}
        height={50}
        value={getLoginStore().user_email.get()}
        onChangeText={getLoginStore().setEmail}
        placeholder="hello@example.com"
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? 'white' : 'black'}
        keyboardType="email-address"
        secureTextEntry={false}
      />

      <CustomText
        style={{
          color: theme.fontColor,
          marginHorizontal: getDimensionsStore().windowWidth  * 0.1,
          marginTop: getDimensionsStore().windowHeight * 0.02,
        }}
        fontSize={20}
        fontWeight={'500'}
      >
        Password
      </CustomText>

      <CustomView
        style={{
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginRight: getDimensionsStore().windowWidth  * 0.1,
        }}
      >
        <TouchableOpacity onPress={() => getNavigationStore().navigateToForgotPassword()}>
          <CustomText
            style={{
              color: theme.fontColor,
            }}
            fontSize={16}
            fontWeight="500"
          >
            {forgotPasswordMessage.forgotPasswordMessage}?
          </CustomText>
        </TouchableOpacity>
      </CustomView>

      <CustomInput
        style={{
          borderColor: theme.fontColor,
          marginHorizontal: getDimensionsStore().windowWidth  * 0.1,
          marginVertical: getDimensionsStore().windowHeight * 0.01,
          borderRadius: 10,
          borderWidth: 2,
          padding: 10,
          marginBottom: getDimensionsStore().windowHeight * 0.05,
        }}
        height={50}
        value={getLoginStore().user_password.get()}
        onChangeText={getLoginStore().setPassword}
        placeholder="*********"
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? 'white' : 'black'}
        keyboardType="default"
        secureTextEntry={true}
      />

      <CustomView
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: getDimensionsStore().windowHeight * 0.05,
        }}
      >
        <CustomButton
          onPress={handlePress}
          style={{
            backgroundColor: theme.borderColor,
            borderRadius: 30,
          }}
          height={60}
          width={getDimensionsStore().windowWidth  * 0.85}
        >
          <CustomView style={{
            display : 'flex' ,
            justifyContent: 'center',
            alignItems: 'center'
            }}>
            <CustomText
              style={{
                color: 'black',
                textAlign: 'center',
                marginTop:20,
                marginLeft: getDimensionsStore().windowWidth * 0.3333


              }}
              fontSize={20}
              fontWeight="300"
            >
              {loginMessage}
            </CustomText>
          </CustomView>
        </CustomButton>
      </CustomView>

      <CustomView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomText
          style={{
            color: theme.fontColor,
            marginBottom: getDimensionsStore().windowHeight * 0.02,
          }}
          fontSize={15}
          fontWeight="600"
        >
          {signInChoice}
        </CustomText>
      </CustomView>

      <CustomView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CustomButton
          onPress={() => {
            Alert.alert('Google Sign In not activated right now!');
          }}
          style={{
            backgroundColor: 'grey',
            borderRadius: 30,
          }}
          height={60}
          width={getDimensionsStore().windowWidth  * 0.85}
        >
          <CustomView style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft : getDimensionsStore().windowWidth * 0.03
            }}>
            <Image
              style={{
                height: 40,
                width: 40,
                marginRight: getDimensionsStore().windowWidth  * 0.05,
                marginTop: getDimensionsStore().windowWidth * 0.01
              }}
              source={googleImage}
            />
            <CustomText
              style={{
                color: 'white',
                marginLeft: getDimensionsStore().windowWidth * 0.1,
                marginTop: getDimensionsStore().windowWidth * 0.040
                
              }}
              fontSize={17}
              fontWeight="300"
            >
              Continue With Google
            </CustomText>
          </CustomView>
        </CustomButton>
      </CustomView>

      <TouchableOpacity onPress={() => getNavigationStore().navigateToCreateAccount()}>
        <CustomView
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: getDimensionsStore().windowHeight * 0.05,
          }}
        >
          <CustomText
            style={{
              color: theme.fontColor,
              paddingBottom: getDimensionsStore().windowWidth * 0.015
            }}
            fontSize={16}
            fontWeight="500"
          >
            {createAccountText.createAccountMessage}
          </CustomText>
        </CustomView>
      </TouchableOpacity>
    </CustomView>
  );
});

export default Login;
