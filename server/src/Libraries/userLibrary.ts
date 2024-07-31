import {getUserModel} from "../Models/userSelect";
import {userSignUp} from "../Models/userInsert";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { hashPassword } from "../helpers/utitilty";

const ENCRYPTION_KEY = 'app';
const userLibrary = {
    userCreateCall : async (user_email : string , user_password : string, user_phone_number : string ,user_country : string , user_name : string) : Promise<{message : string}> => {
        try {
            const hashedPassword = await hashPassword(user_password);
            await userSignUp.registerAsUser(user_email , hashedPassword , user_phone_number ,user_country , user_name);
            const result = {message : "Sign up success"}
            return result;
        } catch ( error ) {
            throw new Error(`Error in user create call, ${error}`)
        }
    },
    adminCreateCall : async (user_email : string , user_password : string, user_phone_Number : string ,user_country : string , user_name : string) : Promise<{message : string}> => {
        try {
            const hashedPassword = await hashPassword(user_password);
            await userSignUp.registerAsAdmin(user_email , hashedPassword , user_phone_Number ,user_country  , user_name);
            const result = {message : "Sign up success"}
            return result;
        } catch ( error ) {
            throw new Error(`Error in admin create call, ${error}`)
        }
    },
    userLoginCallAsUser : async (user_email : string , user_password : string) : Promise<{message : string ;token : string ; user : {email : string , hashPassword : string , user_id : number }} | null> => {
        const user = await getUserModel.LoginAsUser(user_email);
        if (!user) {
            throw new Error ("User is not valid");
        }
        const isPasswordValid = await bcrypt.compare(user_password , user.user_password);
        if (!isPasswordValid) {
            throw new Error ("Password is Invalid");
        }
        const token = jwt.sign({role : "user" , email: user.user_email} ,ENCRYPTION_KEY,{ expiresIn: "1h"});

        const result = {
            message : "Login Successfull",
            token,
            user : {
                email: user.user_email,
                hashPassword: user.user_password,
                user_id: user.user_id
            }
        }
        return result;
    },
    userLoginCallAsAdmin : async (user_email : string , user_password : string) : Promise<{message : string ; user : {email : string , hashPassword : string}} | null> => {
        const user = await getUserModel.LoginAsAdmin(user_email);
        if (!user) {
            throw new Error("User Not Found");
        }
        const isPasswordValid = await bcrypt.compare(user_password , user.user_password);
        if (!isPasswordValid) {
            throw new Error("Invalid Password");
        }
        const result = {
            message : "Login Successfull",
            user : {
                email: user.user_email,
                hashPassword: user.user_password
            }
        }
        return result;
    },
    
    userDataCall : async (user_email : string) : Promise<{user_email : string ; user_name : string ; user_phone_number : string ; user_country : string;} | void | null> => {
        try {
            const user = await getUserModel.fetchProfile(user_email) ;
            console.log("User : => " , user)
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
            throw new Error (`Error while fetching user data, ${error}`)
        }

    },
  
};

export default userLibrary;


