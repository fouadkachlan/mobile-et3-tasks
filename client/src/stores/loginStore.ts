import {  observable, runInAction } from "mobx";
import getRequestStore from "./requestsStore";
import getAuthStore from "./authenticationStore";
import { Alert } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
 class LoginStore 
{
    user_email = observable.box<string>('');
    user_id = observable.box<number>(-1);
    user_password = observable.box<string>('');
    user_phone_number = observable.box<string>('');
    user_country = observable.box<string>('');
    user_name = observable.box<string>('');
    setUserId = (user_id : number ) => {
        runInAction(() => {
            this.user_id.set(user_id);
        })
    }
    setEmail = (emailParameter : string) => {
        runInAction(()=>{
            this.user_email.set(emailParameter);        
        })
    }

    setUsername = (userName : string) => {
        runInAction(() => {
            this.user_name.set(userName);
        })
    }
    
    setPassword = ( passwordParameter : string ) => 
    {
        runInAction(()=>{
            this.user_password.set(passwordParameter);
        })
    }
    setPhoneNumber = ( phoneNumberParameter : string ) => 
    {
        runInAction(()=>{
            this.user_phone_number.set(phoneNumberParameter);
        })
    }
    setUserCountry = ( countryParameter : string ) => 
        {
            runInAction(()=>{
                this.user_country.set(countryParameter);
            })
        }
    resetCredentials = () => {
        this.setEmail("");
        this.setPassword("");
    }

    setProfileData = (user_email : string , user_name : string , user_phone_number : string , user_country : string) => {
        runInAction(() => {
            this.user_email.set(user_email);
            this.user_name.set(user_name);
            this.user_phone_number.set(user_phone_number);
            this.user_country.set(user_country);
        })
    }
    
    handleLogin = async (navigation : NavigationProp<RootStackParamList>) : Promise<void>=> {
        try {
          const response = await getRequestStore().loginRequest();
    
          const data = response.data;
          if (data.message === "Login Successfull") {
            const token: string = data.token;
            console.log("Setting Up JWT token" , token)
            getAuthStore().login(token);
            console.log("Token in authStore:" , getAuthStore().token.get())
            getLoginStore().setUserId(data.user.user_id);
            navigation.navigate('HomeNewsScreen', 'HomeNewsScreen');
          } else {
            Alert.alert('Login Failed', 'Invalid email or password');
          }
        } catch (error) {
          console.error('Error during login', error);
          Alert.alert('Error', 'Failed to login. Please try again later.');
        }
    };
     handleSignUp = async (navigation : NavigationProp<RootStackParamList>): Promise<void> => {
        try {
          const response = await getRequestStore().signInRequest();
          const data = response.data;
          if (data.message === "User Created Successfully") {
            Alert.alert("Congratulations, you are now in our community");
            navigation.navigate("Login", "Login");
          }
        } catch (error) {
          console.error("Error during Sign Up", error);
          Alert.alert("Error", "Failed to Sign Up. Please try again later.");
        }
      };
    
}

const loginStore = new LoginStore();
export const getLoginStore = () => loginStore;
export default getLoginStore;
