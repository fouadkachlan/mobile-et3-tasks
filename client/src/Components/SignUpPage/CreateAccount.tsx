import React from 'react';
import CustomButton from '../../CustomComponents/CustomButton'
import CustomView from '../../CustomComponents/CustomView'
import CustomText from '../../CustomComponents/CustomText'
import CustomInput from '../../CustomComponents/CustomInput'
import getLoginStore from '../../stores/loginStore'
import { observer } from 'mobx-react-lite';
import axios from "axios";
import { Alert } from 'react-native';
import {useNavigation , NavigationProp} from "@react-navigation/native";
import { RootStackParamList } from '../../types/navigation';
import getThemeStore from '../../stores/themeStore';
import { darkMode, lightMode } from '../colors/colors';

const CreateAccount : React.FC = observer(() => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSignUp = async () :Promise<void> => {
    const IP_ADDRESS = "192.168.1.108"

    try 
    {
      const response = await axios.post(`http://${IP_ADDRESS}:3000/api/createUser` , {
        user_email : getLoginStore().user_email.get(),
        user_name: getLoginStore().user_name.get(),
        user_password: getLoginStore().user_password.get(),
        user_phone_number : getLoginStore().user_phone_number.get(),
        user_country : getLoginStore().user_country.get()
      });
      const data = response.data
      if (data.message === "User Created Successfully")
      {
        Alert.alert("Congratulations, you are now in our community");
        navigation.navigate("Login");
      }
    } catch ( error ) {
      console.error("Error during Sign Up", error);
      Alert.alert("Error" , "Failed to Sign Up. Please try again later.")
    }

    
  }
  const theme = getThemeStore().isDarkThemeEnabled.get() ? darkMode : lightMode;


  return (
    <CustomView style={{
      display: 'flex',
      justifyContent:'center',
      alignItems: 'flex-start',
      width: 400,
      height: 750,
      backgroundColor: theme.backGroundColor,
      }}>
        <CustomText 
            style={{
              color : theme.fontColor,
              marginLeft: 10
            }}
            fontSize={50}
            fontWeight={'bold'}
        >Sign Up</CustomText>

        <CustomText
          style={{
            marginLeft: 10,
            color : theme.fontColor
          }}
          fontSize={20}
          fontWeight={'400'}
        >
          Welcome in our app
        </CustomText>
        <CustomText
          style={{color : theme.fontColor,
            marginTop: 20,
            marginLeft: 10
          }}
          fontSize={20}
          fontWeight={'500'}
        >
          Email Address
        </CustomText>

      <CustomInput 
        style={{
          width: 350,
          borderColor: theme.borderColor
        }}
        height={50}
        margin={12}
        marginRight={30}
        borderRadius={10}
        borderWidth={2}
        padding={10}
        value={getLoginStore().user_email.get()}
        onChangeText={(email : string)=>getLoginStore().setEmail(email)}
        placeholder="hello@example.com" 
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
        keyboardType="email-address"  
        secureTextEntry={false}

        />
        <CustomText
          style={{
            color: theme.borderColor,
            marginTop: 5,
            marginLeft: 10
          }}
          fontSize={20}
          fontWeight={'500'}
        >
          Username
        </CustomText>
        <CustomInput 
        style={{
          width: 350,
          borderColor: theme.borderColor
        }}
        height={50}
        margin={12}
        marginRight={30}
        borderRadius={10}
        borderWidth={2}
        padding={10}
        value={getLoginStore().user_name.get()}
        onChangeText={(username : string)=>getLoginStore().setUsername(username)}
        placeholder="myapp" 
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
        keyboardType='default'
        secureTextEntry={false}

        />
         <CustomText
          style={{
            color: theme.borderColor,
            marginTop: 5,
            marginLeft: 10
          }}
          fontSize={20}
          fontWeight={'500'}
        >
          Password
        </CustomText>
      <CustomInput 
        style={{
          borderColor: theme.borderColor,
          marginBottom:30,
          width: 350
        }}
        height={50}
        margin={12}
        marginRight={30}
        borderRadius={10}
        borderWidth={2}
        padding={10}
        placeholder="*********" 
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
        value={getLoginStore().user_password.get()}
        onChangeText={(password : string)=> getLoginStore().setPassword(password) }
        keyboardType="password "
        secureTextEntry={true}
        />
        <CustomView style ={{
          display: 'flex',
          flexDirection: 'row',
          gap: 60
        }}>
           <CustomText
          style = {{
            color: theme.fontColor,
            marginTop: 5 ,
            marginLeft: 10
          }}
          fontSize={20}
          fontWeight={'500'}
        >
          User Country
        </CustomText>
        <CustomText
          style={{
            color: theme.fontColor,
            marginTop: 5,
            marginLeft: 10
          }}
          fontSize={20}
          fontWeight={'500'}
        >
          Phone Number
        </CustomText>
        </CustomView>
        <CustomView style={{
          display: 'flex',
          flexDirection: 'row',
          width: '50%'
        }}>
          
      <CustomInput 
        style={{
          marginBottom:30,
          borderColor: theme.borderColor
        }}
        height={50}
        margin={12}
        marginRight={30}
        borderRadius={10}
        borderWidth={2}
        padding={10}
        placeholder="example: Lebanon" 
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
        value={getLoginStore().user_country.get()}
        onChangeText={(country : string)=> getLoginStore().setUserCountry(country)}
        keyboardType="default"
        secureTextEntry={false}
        />
        
      <CustomInput 
        style={{
          marginBottom:30,
          borderColor: theme.borderColor
        }}
        height={50}
        margin={12}
        marginRight={30}
        borderRadius={10}
        borderWidth={2}
        padding={10}
        placeholder="+961-XXX-XXX => " 
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
        value={getLoginStore().user_phone_number.get()}
        onChangeText={(number : string)=> getLoginStore().setPhoneNumber(number)}
        keyboardType="number-pad"
        secureTextEntry={false}
        />
        </CustomView>
          <CustomView 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 6
          }}
        >
            <CustomButton onPress={handleSignUp}
                style={{
                  backgroundColor: getThemeStore().isDarkThemeEnabled.get() ? darkMode.fontColor :'#77E4C8',
                  marginBottom: 5 ,
                  borderRadius: 30,
                  marginLeft: 10
                }}
                height={60}
                width={350}
                
            >
                <CustomView 
                    style={{display:'flex' , justifyContent:'center' , alignContent:'center'}}
                >
                    <CustomText
                        style={{
                          color: 'black',
                          marginTop:10,
                          marginLeft:140
                        }}
                        fontSize={20}
                        fontWeight='300'
                    >Sign Up</CustomText>
                </CustomView>
            </CustomButton>
          </CustomView>
    </CustomView>
  )
})
export default CreateAccount