import { connectDB, executeQuery, pool } from "../../utils/database";
import {User} from "../../Types/userProps";
import { userFetchDataProps } from "../../Types/userProps";

export const userSelect = {
    LoginAsUser: async (user_email: string): Promise<User | null> => {
        const userEmailParameter : string = user_email;
        const userLoginQuery : string =
        `
            SELECT * FROM users
            WHERE user_email=
        ` + pool.escape(userEmailParameter);
        const result = await executeQuery<User>(userLoginQuery, []);
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
        const userEmailParameter : string = user_email;
        const userLoginQuery : string = 
        `
            SELECT *
            FROM users
            WHERE user_email=
        ` + pool.escape(userEmailParameter);
        const result = await executeQuery<User>(userLoginQuery, []);
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
        const userEmailParameter : string = user_email;
        const userLoginQuery : string =
        `
            SELECT *
            FROM users
            WHERE user_email=
        ` + pool.escape(userEmailParameter);
        const result = await executeQuery<userFetchDataProps>(userLoginQuery, []);
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
