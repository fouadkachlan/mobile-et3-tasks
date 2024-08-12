import React, { useContext } from 'react';
import { Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import CustomButton from '../../CustomComponents/CustomButton';
import CustomView from '../../CustomComponents/CustomView';
import CustomText from '../../CustomComponents/CustomText';
import CustomInput from '../../CustomComponents/CustomInput';
import getLoginStore from '../../stores/loginStore';
import getThemeStore from '../../stores/themeStore';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { createAccountText, emailAddressText, welcomingMessage } from '../Constant/constants';
import { RootStackParamList } from '../../types/navigation';
import getDimensionsStore from '../../stores/dimensionsStore';
import CreateAccountHeader from './Header/CreateAccountHeader';


const CreateAccount: React.FC = observer(() => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = async () : Promise<void> => {
    try {
      getLoginStore().handleSignUp(navigation);

    } catch (error) {
      Alert.alert("Error", "Error While Handling Sign Up!");
    }
  } 

  const { theme } = useContext(ThemeContext);

  return (
    <CustomView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: getDimensionsStore().windowWidth * 0.05,
        backgroundColor: theme.backGroundColor,
      }}
    >
      
      <CreateAccountHeader />

      <CustomText
        style={{
          color: theme.fontColor,
          marginTop: getDimensionsStore().windowHeight  * 0.02,
          marginBottom: getDimensionsStore().windowHeight  * 0.01,
        }}
        fontSize={getDimensionsStore().windowWidth * 0.05}
        fontWeight={'500'}
      >
        {emailAddressText}
      </CustomText>

      <CustomInput
        style={{
          width: '100%',
          borderColor: theme.borderColor,
          marginBottom: getDimensionsStore().windowHeight  * 0.02,
          borderRadius: 10,
          borderWidth: 2,
          padding: getDimensionsStore().windowWidth * 0.02,
        }}
        height={getDimensionsStore().windowHeight  * 0.06}
        value={getLoginStore().user_email.get()}
        onChangeText={(email: string) => getLoginStore().setEmail(email)}
        placeholder="hello@example.com"
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
        keyboardType="email-address"
        secureTextEntry={false}
      />

      <CustomText 
        style={{
          color: theme.fontColor,
          marginBottom: getDimensionsStore().windowHeight  * 0.01,
        }}
        fontSize={getDimensionsStore().windowWidth * 0.05}
        fontWeight={'500'}
      >
        {createAccountText.username}
      </CustomText>

      <CustomInput 
        style={{
          width: '100%',
          borderColor: theme.borderColor,
          marginBottom: getDimensionsStore().windowHeight  * 0.02,
          borderRadius: 10,
          borderWidth: 2,
          padding: getDimensionsStore().windowWidth * 0.02,
        }}
        height={getDimensionsStore().windowHeight  * 0.06}
        value={getLoginStore().user_name.get()}
        onChangeText={(username: string) => getLoginStore().setUsername(username)}
        placeholder="myapp"
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
        keyboardType='default'
        secureTextEntry={false}
      />

      <CustomText
        style={{
          color: theme.fontColor,
          marginBottom: getDimensionsStore().windowHeight  * 0.01,
        }}
        fontSize={getDimensionsStore().windowWidth * 0.05}
        fontWeight={'500'}
      >
        {createAccountText.password}
      </CustomText>

      <CustomInput 
        style={{
          width: '100%',
          borderColor: theme.borderColor,
          marginBottom: getDimensionsStore().windowHeight  * 0.03,
          borderRadius: 10,
          borderWidth: 2,
          padding: getDimensionsStore().windowWidth * 0.02,
        }}
        height={getDimensionsStore().windowHeight  * 0.06}
        value={getLoginStore().user_password.get()}
        onChangeText={(password: string) => getLoginStore().setPassword(password)}
        placeholder="*********"
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
        keyboardType="default"
        secureTextEntry={true}
      />

      <CustomView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: getDimensionsStore().windowHeight  * 0.01,
        }}
      >
        <CustomText
          style={{
            color: theme.fontColor,
          }}
          fontSize={getDimensionsStore().windowWidth * 0.05}
          fontWeight={'500'}
        >
          {createAccountText.userCountry}
        </CustomText>

        <CustomText 
          style={{
            color: theme.fontColor,
            marginRight : getDimensionsStore().windowWidth * 0.1
          }}
          fontSize={getDimensionsStore().windowWidth * 0.05}
          fontWeight={'500'}
        >
          {createAccountText.phoneNumber}
        </CustomText>
      </CustomView>

      <CustomView
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: getDimensionsStore().windowHeight  * 0.03,
        }}
      >
        <CustomInput 
          style={{
            width: '48%',
            borderColor: theme.borderColor,
            borderRadius: 10,
            borderWidth: 2,
            padding: getDimensionsStore().windowWidth * 0.02,
          }}
          height={getDimensionsStore().windowHeight  * 0.06}
          placeholder="example: Lebanon"
          placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
          value={getLoginStore().user_country.get()}
          onChangeText={(country: string) => getLoginStore().setUserCountry(country)}
          keyboardType="default"
          secureTextEntry={false}
        />

        <CustomInput 
          style={{
            width: '48%',
            borderColor: theme.borderColor,
            borderRadius: 10,
            borderWidth: 2,
            padding: getDimensionsStore().windowWidth * 0.02,
          }}
          height={getDimensionsStore().windowHeight  * 0.06}
          placeholder="+961-XXX-XXX => "
          placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
          value={getLoginStore().user_phone_number.get()}
          onChangeText={(number: string) => getLoginStore().setPhoneNumber(number)}
          keyboardType="number-pad"
          secureTextEntry={false}
        />
      </CustomView>

      <CustomView 
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <CustomButton
          onPress={handlePress}
          style={{
            backgroundColor: theme.borderColor,
            borderRadius: 30,
          }}
          height={getDimensionsStore().windowHeight * 0.08}
          width={getDimensionsStore().windowWidth * 0.9}
        >
          <CustomView style={{ justifyContent: 'center', alignItems: 'center'  }}>
            <CustomText
              style={{
                color: 'black',
                marginLeft: getDimensionsStore().windowWidth * 0.36,
                marginTop: getDimensionsStore().windowWidth * 0.05
                
              }}
              fontSize={getDimensionsStore().windowWidth * 0.05}
              fontWeight='300'
            >
              {createAccountText.signUp}
            </CustomText>
          </CustomView>
        </CustomButton>
      </CustomView>
    </CustomView>
  );
});

export default CreateAccount;
