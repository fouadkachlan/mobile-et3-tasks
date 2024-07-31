import { executeQuery } from "../utils/database";
import {User} from "../Interfaces/userProps";
import { userFetchDataProps } from "../Interfaces/userProps";

export const getUserModel = {
    LoginAsUser: async (user_email: string): Promise<User | null> => {
        const userLoginQuery : string = "SELECT * FROM `news_reader_app`.`users` WHERE user_email=?";
        const result = await executeQuery<User>(userLoginQuery, [user_email]);
        if (result.length === 0) {
            return null;
        }
        return {
            user_email: result[0].user_email,   
            user_password: result[0].user_password,
            user_id: result[0].user_id
        };
    },
    LoginAsAdmin: async (user_email: string): Promise<User | null> => {
        const userLoginQuery : string = "SELECT * FROM `news_reader_app`.`users` WHERE user_email=?";
        const result = await executeQuery<User>(userLoginQuery, [user_email]);
        if (result.length === 0) {
            return null;
        }
        return {
            user_email: result[0].user_email,   
            user_password: result[0].user_password,
            user_id : result[0].user_id
        };
    },
    fetchProfile: async (user_email: string): Promise<userFetchDataProps | null> => {
        const userLoginQuery : string = "SELECT * FROM `news_reader_app`.`users` WHERE user_email=?";
        const result = await executeQuery<userFetchDataProps>(userLoginQuery, [user_email]);
        console.log(userLoginQuery , result);
        if (result.length === 0) {
            return null;
        }
        return {
            user_email: result[0].user_email,
            user_id: result[0].user_id,
            user_name : result[0].user_name,   
            user_phone_number : result[0].user_phone_number,
            user_country : result[0].user_country
        };
    }
}
