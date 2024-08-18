import {userSelect} from "../Models/userModels/userSelect";
import {userInsert} from "../Models/userModels/userInsert";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { hashPassword } from "../helpers/utitilty";
import { ENCRYPTION_KEY, REFRESH_ENCRYPTION_KEY } from "../Constant/User";
import { UserMessages } from "../Constant/Message";
import { userModels } from "../Models";

const userLibrary = {
    userCreateCall : async (user_email : string , user_password : string, user_phone_number : string ,user_country : string , user_name : string) : Promise<{message : string}> => {
        try {
            const hashedPassword = await hashPassword(user_password);
            await userInsert.registerAsUser(user_email , hashedPassword , user_phone_number ,user_country , user_name);
            const result = {message : UserMessages.Success.userSignUpSuccess}
            return result;
        } catch ( error ) {
            throw new Error(UserMessages.Fail.userCreateError)
        }
    },
    adminCreateCall : async (user_email : string , user_password : string, user_phone_Number : string ,user_country : string , user_name : string) : Promise<{message : string}> => {
        try {
            const hashedPassword = await hashPassword(user_password);
            await userInsert.registerAsAdmin(user_email , hashedPassword , user_phone_Number ,user_country  , user_name);
            const result = {message : UserMessages.Success.userSignUpSuccess}
            return result;
        } catch ( error ) {
            throw new Error(UserMessages.Fail.adminCreateError)
        }
    },
    userLoginCallAsUser : async (user_email : string , user_password : string) : Promise<{message : string ;accessToken : string ; user : {email : string , hashPassword : string , user_id : number }} | null> => {
        const user = await userSelect.LoginAsUser(user_email);
        if (!user) {
            throw new Error (UserMessages.Fail.userNotValidError);
        }
        const isPasswordValid = await bcrypt.compare(user_password , user.user_password);
        if (!isPasswordValid) {
            throw new Error (UserMessages.Fail.emailAndPasswordError);
        }
        const accessToken : string = jwt.sign({role : "user" , email: user.user_email} , ENCRYPTION_KEY,{ expiresIn: "1h"});
        // const refreshToken : string = jwt.sign({role: "user", email : user.user_email}, REFRESH_ENCRYPTION_KEY, {expiresIn: "7d"})
        const result = {
            message : UserMessages.Success.LoginSuccessfull,
            accessToken,
            // refreshToken,
            user : {
                email: user.user_email,
                hashPassword: user.user_password,
                user_id: user.user_id
            }
        }
        return result;
    },
    userLoginCallAsAdmin : async (user_email : string , user_password : string) : Promise<{message : string ; user : {email : string , hashPassword : string}} | null> => {
        const user = await userSelect.LoginAsAdmin(user_email);
        if (!user) {
            throw new Error(UserMessages.Fail.userNotFoundError);
        }
        const isPasswordValid = await bcrypt.compare(user_password , user.user_password);
        if (!isPasswordValid) {
            throw new Error(UserMessages.Fail.emailAndPasswordError);
        }
        const result = {
            message : UserMessages.Success.LoginSuccessfull,
            user : {
                email: user.user_email,
                hashPassword: user.user_password
            }
        }
        return result;
    },
    
    userDataCall : async (user_email : string) : Promise<{user_email : string ; user_name : string ; user_phone_number : string ; user_country : string;} | void | null> => {
        try {
            const user = await userSelect.fetchProfile(user_email) ;
            if (user) {
                return {
                    user_email : user.user_email,
                    user_name : user.user_name,
                    user_phone_number : user.user_phone_number,
                    user_country: user.user_country

                };
            } else {
                return null;
            }
        } catch ( error ) {
            throw new Error (UserMessages.Fail.fetchDataError)
        }

    },
    userUpdateUserNameCall : async (user_name : string , user_id : number) : Promise<void> => {
        try {
            await userModels.update.userUpdateUsernameModels(user_name , user_id);
        } 
        catch ( error )
        {
            throw new Error (UserMessages.Fail.UpdateError);
        }
    },
    userUpdateEmailCall : async (user_email : string , user_id : number) : Promise<void> => {
        try {
            await userModels.update.userUpdateEmailModels(user_email , user_id);
        } 
        catch ( error )
        {
            throw new Error (UserMessages.Fail.UpdateError);
        }
    },
    userUpdateNumberCall : async (user_phone_number : string , user_id : number) : Promise<void> => {
        try {
            await userModels.update.userUpdateNumberModels(user_phone_number , user_id);
        } 
        catch ( error )
        {
            throw new Error (UserMessages.Fail.UpdateError);
        }
    },
    userUpdateCountryCall: async (user_country : string , user_id : number) : Promise<void> => {
        try {
            await userModels.update.userUpdateCountryModels(user_country , user_id);
        } 
        catch ( error )
        {
            throw new Error (UserMessages.Fail.UpdateError);
        }
    }
  
};

export default userLibrary;


