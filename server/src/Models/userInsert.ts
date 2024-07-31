import { executeQuery } from "../utils/database";

export const userSignUp = {
    registerAsAdmin : async (user_email : string , hashedPassword : string, user_phone_number : string ,user_country : string , user_name : string) => {
        const registerUser : string = "INSERT INTO `news_reader_app`.`users` (`user_email`, `user_password`, `user_phone_number`, `user_country` , `user_role` , `user_name`) VALUES (?,?,?,?,'admin',?)";
        console.log('SQL Query:', registerUser);
        console.log('Parameters:', [user_email , hashedPassword, user_phone_number ,user_country  , user_name ]);
        await executeQuery(registerUser , [user_email, hashedPassword, user_phone_number ,user_country, user_name ]);
    },
    registerAsUser : async (user_email : string , hashedPassword : string, user_phone_number : string ,user_country : string , user_name : string) => {
        const registerUser : string = "INSERT INTO `news_reader_app`.`users` (`user_email`, `user_password`, `user_phone_number`, `user_country` , `user_role` , `user_name`) VALUES (?,?,?,?,'user',?)";
        console.log('SQL Query:', registerUser);
        console.log('Parameters:', [user_email , hashedPassword , user_phone_number ,user_country  , user_name]);
        await executeQuery(registerUser , [user_email , hashedPassword , user_phone_number ,user_country  , user_name]);
    },
}

