import { executeQuery, pool } from "../../utils/database";


export const userUpdateModels = {
    userUpdateUsernameModels : async (user_name : string , user_id : number) : Promise<void> => {
        const escapedUserName = pool.escape(user_name);
        const updateQuery = 
        `
            UPDATE news_reader_app.users SET user_name = ${escapedUserName} WHERE user_id= ${user_id};

        `
        await executeQuery<void>(updateQuery , []);
    },
    userUpdateEmailModels : async (user_email : string , user_id : number) : Promise<void> => {
        const escapedUserEmail = pool.escape(user_email);
        const updateQuery = 
        `
            UPDATE news_reader_app.users SET user_email = ${escapedUserEmail} WHERE user_id= ${user_id};

        `
        await executeQuery<void>(updateQuery , []);
    },
    userUpdateNumberModels : async (user_phone_number : string , user_id : number) : Promise<void> => {
        const escapedUserNumber = pool.escape(user_phone_number);
        const updateQuery = 
        `
            UPDATE news_reader_app.users SET user_phone_number = ${escapedUserNumber} WHERE user_id= ${user_id};

        `
        await executeQuery<void>(updateQuery , []);
    },
    userUpdateCountryModels : async (user_country : string , user_id : number) : Promise<void> => {
        const escapedUserCountry = pool.escape(user_country);
        const updateQuery = 
        `
            UPDATE news_reader_app.users SET user_country = ${escapedUserCountry} WHERE user_id= ${user_id};

        `
        await executeQuery<void>(updateQuery , []);
    }

}