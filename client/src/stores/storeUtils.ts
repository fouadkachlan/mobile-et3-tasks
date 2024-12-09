import getLoginStore from "./loginStore";
import getNewsStore from "./newsStore";
import getRequestStore from "./requestsStore";

export const getUserCredentials = () => ({
    email: getLoginStore().user_email.get(),
    password: getLoginStore().user_password.get(),
    country: getLoginStore().user_country.get(),
    phone: getLoginStore().user_phone_number.get(),
    username: getLoginStore().user_name.get(),
    id : getLoginStore().user_id.get()
})
export const  getNewsCredentials = () => ({
    news_date : getNewsStore().date.get(),
    news_content : getNewsStore().news.get(),
})
export const ChangeUsernameUtil = () => (getRequestStore().changeUsernameRequest())
export const ChangeNumberUtil = () => (getRequestStore().changeNumberRequest())
export const ChangeEmailUtil = () => (getRequestStore().changeEmailRequest())
export const ChangeCountryUtil = () => (getRequestStore().changeCountryRequest())
export const resetUserCredentialsUtil = () => (getLoginStore().resetCredentials())
export const profileFetchUtil = () => (getRequestStore().profileFetchRequest())
export const fetchNewsUtil = () => (getRequestStore().fetchNewsRequest())
export const addNewsUtil = () => (getRequestStore().addNewsRequest())
export const loginHandlingUtil = () => (getRequestStore().loginRequest())
export const SignInHandlingUtil = () => (getRequestStore().signInRequest())

