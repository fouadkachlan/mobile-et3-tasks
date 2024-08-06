export type userProps = {
    user_email: string;
    user_id : number;
    user_password: string;
    user_phone_number: string;
    user_country: string;
}

export type User =  {
    user_email: string;
    user_password: string;
    user_id : number;
}


export type userFetchDataProps = {
    user_email: string;  
    user_id : number;
    user_name : string;
    user_phone_number : string;
    user_country : string;
}
