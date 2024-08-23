import { observable, runInAction } from 'mobx';
import { NavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

export class NavigationStore {
  navigationRef = observable.box<NavigationContainerRef<RootStackParamList> | null>(null);

  setNavigationRef(ref: NavigationContainerRef<RootStackParamList> | null) {
    runInAction(() => {
      this.navigationRef.set(ref);
    });
  }
  goBack(){
    runInAction(() => {
      this.navigationRef.get()?.goBack();
    })
  }

  navigateToLogin() {
    runInAction(() => {
      const ref = this.navigationRef.get();
      if (ref) {
        ref.navigate("Login" , "Login");
      } else {
        console.error("Navigation ref is null");
      }
    });
  }
  navigateToHomeScreen(){
    runInAction(() => {
      this.navigationRef.get()?.navigate("HomeNewsScreen","HomeNewsScreen")
    })
  }

  navigateToCreateAccount() {
    runInAction(() => {
      this.navigationRef.get()?.navigate("CreateAccount", "CreateAccount"); // Use .get() to access the ref value
    });
  }
  navigateToAddPopUp() {
    runInAction(() => {
      this.navigationRef.get()?.navigate("AddNewsPopUp","AddNewsPopUp")
    })
  }
  navigateToForgotPassword() {
    runInAction(() => {
      this.navigationRef.get()?.navigate("ForgotPassword","ForgotPassword")
    })
  }
  navigateToUserProfile() { 
    runInAction(() => {
      this.navigationRef.get()?.navigate("userProfile", "userProfile")
    })
  }
  navigateToSettings(){
    runInAction(()=> {
      this.navigationRef.get()?.navigate("Settings", "Settings")
    })
  }
  navigateToChangeCountry(){
    runInAction(()=>{
      this.navigationRef.get()?.navigate("ChangeCountry" , "ChangeCountry")
    })
  }
  navigateToChangeEmail(){
    runInAction(()=>{
      this.navigationRef.get()?.navigate("ChangeEmailAddress" , "ChangeEmailAddress")
    })
  }
  navigateToChangePhoneNumber(){
    runInAction(()=>{
      this.navigationRef.get()?.navigate("ChangePhoneNumber","ChangePhoneNumber") 
    })
  }
  navigateToChangeProfile(){
    runInAction(()=> {
      this.navigationRef.get()?.navigate("ChangeProfile" , "ChangeProfile")
    })
  }
  navigateToChangeUserName(){
    runInAction(()=>{
      this.navigationRef.get()?.navigate("Changeusername" , "Changeusername")
    })
  }
}

const navigationStore = new NavigationStore();
export const getNavigationStore = () => navigationStore;
export default getNavigationStore;
