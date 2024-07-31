import {  observable, runInAction } from "mobx";

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
}

const loginStore = new LoginStore();
export const getLoginStore = () => loginStore;
export default getLoginStore;
