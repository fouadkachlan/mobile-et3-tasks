export type userCreateRequestBody  = {
    user_email : string ;
    user_password : string ;
    user_phone_number : string;
    user_country : string;
    user_role: string;
    user_name: string
}

export type adminCreateRequestBody  = {
    user_email : string ;
    user_password : string ;
    user_phone_number : string;
    user_country : string;
    user_role: string;
    user_name: string
}

export type userLoginRequestBody = {
    user_email : string;
    user_password : string;
}

export type adminLoginRequestBody = {
    user_email : string;
    user_password : string;
}

export type fetchUserdataRequestBody = {
    user_email : string;
}