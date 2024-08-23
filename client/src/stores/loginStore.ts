import {  observable, runInAction } from "mobx";
import getRequestStore from "./requestsStore";
import getAuthStore from "./authenticationStore";
import { Alert } from "react-native";
import getNavigationStore from "./navigationStore";
import { changeProfile, createAccountText, loginMessage, loginStoreText, newsMessage } from "../Components/Constant/constants";
import { ChangeCountryUtil, ChangeEmailUtil, ChangeNumberUtil, ChangeUsernameUtil, loginHandlingUtil, profileFetchUtil, resetUserCredentialsUtil, SignInHandlingUtil } from "./storeUtils";

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
    
    handleLogin = async () : Promise<void>=> {
        try {
          const response = await loginHandlingUtil();
    
          const data = response.data;
          if (data.message === loginStoreText.Success.LOGIN_SUCCSESSGULL) {
            const token: string = data.accessToken;
            getAuthStore().login(token);
            this.setUserId(data.user.user_id);
            getNavigationStore().navigateToHomeScreen()
        } else {
            Alert.alert(loginStoreText.Fail.ErrorMessage, loginStoreText.Fail.LoginError);
          }
        } catch (error) {
          Alert.alert(loginStoreText.Fail.ErrorMessage, loginStoreText.Fail.LoginError);
        }
    };
     handleSignUp = async (): Promise<void> => {
        try {
          const response = await SignInHandlingUtil();
          const data = response.data;
          if (data.message === loginStoreText.Success.USER_CREATED_SUCCESSFULLY) {
            Alert.alert(createAccountText.CONGRATULATIONS);
            getNavigationStore().navigateToLogin()
        }
        } catch (error) {
          Alert.alert(loginStoreText.Fail.ErrorMessage, loginStoreText.Fail.CreateAccountError);
        }
      };
       handleLoginPress = async () : Promise<void> => {
        try {
          this.handleLogin();
    
        } catch ( error ) {
          Alert.alert(loginStoreText.Fail.ErrorMessage , newsMessage.Fail.ADDNEWS)
        }
      }
      handleUsernameChange = async () : Promise<void> => {
        try {
            await ChangeUsernameUtil();
            Alert.alert(loginStoreText.Success.Sucess , changeProfile.Success.changeUserName)
        } catch ( error ) {
            Alert.alert (changeProfile.Fail.changeUserName , `${error}`);
        }
      };
      handleNumberChange = async () : Promise<void> => {
        try {
            await ChangeNumberUtil();
            Alert.alert(loginStoreText.Success.Sucess  , changeProfile.Success.changeNumber)
        } catch ( error ) {
            Alert.alert (changeProfile.Fail.changeNumber , `${error}`);
        }
      }
      handleEmailChange = async () : Promise<void> => {
        try {
            await ChangeEmailUtil();
            Alert.alert(loginStoreText.Success.Sucess,changeProfile.Success.changeEmail)
        } catch ( error ) {
            Alert.alert (`${error}`,changeProfile.Fail.changeEmail);
        }
      }
      handleCountryChange = async () : Promise<void> => {
        try {
            await ChangeCountryUtil();
            Alert.alert(loginStoreText.Success.Sucess, changeProfile.Success.changeCountry)
        } catch ( error ) {
            Alert.alert (changeProfile.Fail.changeCountry , `${error}`);
        }
      }
       handleNavigationLogout = () => {
        resetUserCredentialsUtil();
        getAuthStore().logout();
        getNavigationStore().navigateToLogin();
      };
       handleProfileFetch = async (): Promise<void> => {
        try {
          await profileFetchUtil();
          const data = (await profileFetchUtil()).data;
          this.setProfileData(data.user_email, data.user_name, data.user_phone_number, data.user_country);
        } catch (error) {
            Alert.alert(loginStoreText.Fail.ProfileFetchError)
        }
      };
       handleChangeCountry = async () : Promise<void> => {
        try 
        {
             this.handleCountryChange();
             getNavigationStore().navigateToUserProfile();
        } catch ( error ) {
            Alert.alert(changeProfile.Fail.toString());
        }
    }
     handleChangeEmail = async () : Promise<void> => {
        try 
        {
            this.handleEmailChange();
            getNavigationStore().navigateToUserProfile();
        } catch ( error ) {
            Alert.alert(changeProfile.Fail.changeEmail);
        }
        }
         handleChangeNumber = async () : Promise<void> => {
            try 
            {
                 this.handleNumberChange();
                 getNavigationStore().navigateToUserProfile();
            } catch ( error ) {
                Alert.alert(changeProfile.Fail.changeNumber);
            }
        }
         handleChangeUsername = async () : Promise<void> => {
            try 
            {
                this.handleUsernameChange();
                getNavigationStore().navigateToUserProfile();
            } catch ( error ) {
                Alert.alert(changeProfile.Fail.changeUserName);
            }
        }
         handleCreateAccountPress = async () : Promise<void> => {
            try {
              this.handleSignUp();
        
            } catch (error) {
              Alert.alert(loginStoreText.Fail.ErrorMessage , loginStoreText.Fail.CreateAccountError );
            }
          } 
    
}
const loginStore = new LoginStore();
export const getLoginStore = () => loginStore;
export default getLoginStore;
