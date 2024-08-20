import getLoginStore from "./loginStore";

export const getUserCredentials = () => ({
    email: getLoginStore().user_email.get(),
    password: getLoginStore().user_password.get(),
    country: getLoginStore().user_country.get(),
    phone: getLoginStore().user_phone_number.get(),
    username: getLoginStore().user_name.get(),
    id : getLoginStore().user_id.get()
})

