import React from 'react';
import { TouchableOpacity , Image, Alert} from 'react-native';
import { observer } from 'mobx-react-lite';
import { RootStackParamList } from '../../types/navigation';
import {useNavigation , NavigationProp} from "@react-navigation/native";
import axios from "axios";
import CustomButton from '../../CustomComponents/CustomButton'
import CustomView from '../../CustomComponents/CustomView'
import CustomText from '../../CustomComponents/CustomText'
import CustomInput from '../../CustomComponents/CustomInput'
import getLoginStore from '../../stores/loginStore'
import getThemeStore from '../../stores/themeStore';
import { darkMode, lightMode } from '../colors/colors';
import getAuthStore from '../../stores/authenticationStore';
import { Dimensions } from 'react-native';
import { setToken } from './utility/mmkvLogin';


const googleImage = require('../../../../assets/google-symbol.png');

const Login : React.FC = observer(() => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

 
  const handleLogin = async (): Promise<void> => {
    try {
      const IP_ADDRESS: string = "192.168.100.126";
      const response = await axios.post(
        `http://${IP_ADDRESS}:3000/api/loginUser`,
        {
          user_email: getLoginStore().user_email.get(),
          user_password: getLoginStore().user_password.get(),
        },
        {
          headers: {
            Authorization: `Bearer ` 
          }
        }
      );
  
      const data = response.data;
      console.log("Data message is here here here here:", data);
  
      if (data.message === "Login Successfull") {
        const token: string = data.token;
        setToken(token);
        getAuthStore().login(token);
        getLoginStore().setUserId(data.user.user_id);
        navigation.navigate("HomeNewsScreen");
      } else {
        Alert.alert("Login Failed", "Invalid email or password");
      }
    } catch (error) {
      console.error("Error during login", error);
      Alert.alert("Error", "Failed to login. Please try again later.");
    }
  }
  
  const theme = getThemeStore().isDarkThemeEnabled.get() ? darkMode : lightMode;
  const windowHeight = Dimensions.get("window").height;
  return (

    <CustomView style={{
      display: 'flex',
      justifyContent:'center',
      backgroundColor: theme.backGroundColor,
      height: windowHeight
      }} >
        <CustomText 
            style={{
              color : theme.fontColor
            }}
            fontSize={50}
            fontWeight={'bold'}
        >Login</CustomText>

        <CustomText
          style={{color : theme.fontColor}}
          fontSize={20}
          fontWeight={'400'}
        >
          Welcome Back to the app
        </CustomText>
        <CustomText
          style={{
            color:theme.fontColor,
            marginTop: 90
          }}
          fontSize={20}
          fontWeight={'500'}
        >
          Email Address
        </CustomText>

      <CustomInput 
        style={{
          borderColor: theme.fontColor
        }}
        height={50}
        margin={12}
        marginRight={30}
        borderRadius={10}
        borderWidth={2}
        padding={10}
        value={getLoginStore().user_email.get()}
        onChangeText={getLoginStore().setEmail}
        placeholder="hello@example.com" 
        placeholderTextColor={getThemeStore().isDarkThemeEnabled.get() ? "white" : "black"}
        keyboardType="email-address"  
        secureTextEntry={false}

        />
         <CustomText
          style={{
            color : theme.fontColor,
             marginTop: 5}}
          fontSize={20}
          fontWeight={'500'}
        >
          Password
        </CustomText>

        <CustomView style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginRight : 15
        }} >
        <TouchableOpacity onPress={()=>navigation.navigate("ForgotPassword")} >
                <CustomText 
                    style={{
                      color : theme.fontColor
                    }}
                    fontSize={16}
                    fontWeight='500'
                 >Forgot Password ?</CustomText>
            </TouchableOpacity>
        </CustomView>


      <CustomInput 
        style={{
          borderColor : theme.fontColor,
          marginBottom:30
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
        onChangeText={getLoginStore().setPassword}
        keyboardType="default"
        secureTextEntry={true}
        />
       
        <CustomView 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            marginRight:10
          }}
        >
            <CustomButton onPress={handleLogin}
                style={{
                  backgroundColor: theme.borderColor,
                  marginBottom: 5,
                  borderRadius: 30
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
                          marginTop:20,
                          marginLeft:140
                        }}
                        fontSize={20}
                        fontWeight='300'
                    >Login</CustomText>
                </CustomView>
            </CustomButton>
          </CustomView>
          <CustomView
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <CustomText
              style={{
                color : theme.fontColor,
                paddingTop:5,
                paddingBottom:20,
                marginRight:25
              }}
              fontSize={15}
              fontWeight='600'
            >
            _______ Or sign in with _______
            </CustomText>
          </CustomView>


          <CustomView 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom:0,
            marginRight:10
          }}
        >
            <CustomButton onPress={()=>{Alert.alert("Google Sign In not activated right now!")}}
                style={{ 
                  backgroundColor: 'grey',
                  marginBottom: 40 ,
                  borderRadius: 30,
                  marginLeft: 8 
                }}
                height={60}
                width={350}
                
            >
                <CustomView 
                    style={{
                      display:'flex',
                      flexDirection: 'row',
                      justifyContent:'center' ,
                      alignItems:'center'
                    }}
                >
                  <CustomView 
                    style={{display : 'flex' , justifyContent: 'center' , alignContent:"center"}}
                  >
                    <Image style={{
                          height: 40 ,
                          width: 40 ,
                          overflow:'visible' ,
                          marginTop:9 ,
                          marginLeft: 50
                          }} source={googleImage} />
                      <CustomText
                          style={{
                            color: 'white' ,
                            marginLeft: 120,
                            marginTop: -30
                          }}
                          fontSize={17}
                          fontWeight='300'
                      >Continue With Google</CustomText>
                  </CustomView>
                </CustomView>
            </CustomButton>
          </CustomView>
          <TouchableOpacity onPress={()=>navigation.navigate("CreateAccount")} >
                <CustomView style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '20%'
                }}>
                  <CustomText 
                    style={{
                      color:theme.fontColor
                    }}
                    fontSize={16}
                    fontWeight='500'
                 >Create an account</CustomText>
                </CustomView>
            </TouchableOpacity>
    </CustomView>
  )
})
  

export default Login


