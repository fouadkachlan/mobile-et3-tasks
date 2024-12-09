import { executeQuery, pool } from "../../utils/database";

export const userInsert = {
    registerAsAdmin : async (user_email : string , hashedPassword : string, user_phone_number : string ,user_country : string , user_name : string) => {
        
        const userEmailParameterEscaped : string = pool.escape(user_email);
        const hashedPasswordParameterEscaped : string = pool.escape(hashedPassword);
        const phoneNumberparameterEscaped : string = pool.escape(user_phone_number);
        const userCountryParameterEscaped : string = pool.escape(user_country);
        const userNameParameterEscaped : string = pool.escape(user_name);
        const registerUser : string = 
        `
            INSERT INTO users 
            (user_email, user_password, user_phone_number, user_country , user_role , user_name)
            VALUES 
            (${userEmailParameterEscaped},${hashedPasswordParameterEscaped},${phoneNumberparameterEscaped},${userCountryParameterEscaped},'admin',${userNameParameterEscaped})
        `;
        await executeQuery(registerUser , []);
    },
    registerAsUser : async (user_email : string , hashedPassword : string, user_phone_number : string ,user_country : string , user_name : string) => {
        const userEmailParameterEscaped : string = pool.escape(user_email);
        const hashedPasswordParameterEscaped : string = pool.escape(hashedPassword);
        const phoneNumberparameterEscaped : string = pool.escape(user_phone_number);
        const userCountryParameterEscaped : string = pool.escape(user_country);
        const userNameParameterEscaped : string = pool.escape(user_name);
        const registerUser : string = 
        `
            INSERT INTO users (user_email, user_password, user_phone_number, user_country , user_role , user_name) 
            VALUES (${userEmailParameterEscaped},${hashedPasswordParameterEscaped},${phoneNumberparameterEscaped},${userCountryParameterEscaped},'user',${userNameParameterEscaped})
        `;
        console.log("Sign In query : " , registerUser)

        await executeQuery(registerUser , []);
    },
}

