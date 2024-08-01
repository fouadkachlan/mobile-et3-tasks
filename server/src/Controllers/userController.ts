import { Request, Response } from 'express';
import { hashPassword } from '../helpers/utitilty';
import userLibrary from '../Libraries/userLibrary';

export const createUser = async (req : Request , res : Response) : Promise<void> => {
    try {
        const { user_email , user_password , user_phone_number ,user_country , user_role , user_name } = req.body;
        await userLibrary.userCreateCall(user_email , user_password , user_phone_number ,user_country , user_name);
        res.status(200).json({message : "User Created Successfully"});
    } catch (error) {
        res.status(500).json({error : `Error Creating User, ${error}`});
    }
}


export const createAdmin = async (req : Request , res : Response) : Promise<void> => {
    try {
        const { user_email , user_password , user_phone_number ,user_country , user_role , user_name} = req.body;
        await userLibrary.adminCreateCall(user_email , user_password , user_phone_number ,user_country , user_name);
        res.status(200).json({message : "User Created Successfully"});
    } catch (error) {
        res.status(500).json({error : `Error Creating User, ${error}`});
    }
}


export const authenticateLoginAsUser = async (req: Request , res : Response) : Promise<void>=> {
    try {
        const {user_email , user_password} = req.body;
        const result = await userLibrary.userLoginCallAsUser(user_email , user_password);
        if ( result ) {
            res.status(200).json(result);
        }
        else {
            console.log("Sending error response: Invalid email or password");
            res.status(401).json({error : "Invalid email or password"})
        }
    } catch ( error ) {
        console.error("Error during login:", error);
        res.status(500).json({message : "Internal server error"});
    }
}

export const authenticateLoginAsAdmin = async (req: Request , res : Response) : Promise<void>=> {
    try {
        const {user_email , user_password} = req.body;
        const result = await userLibrary.userLoginCallAsAdmin(user_email , user_password);
        if ( result ) {
            res.status(200).json(result);
        }
        else {
            console.log("Sending error response: Invalid email or password");
            res.status(401).json({error : "Invalid email or password"})
        }
    } catch ( error ) {
        console.error("Error during login:", error);
        res.status(500).json({message : "Internal server error"});
    }
}


export const userProfileData = async (req : Request , res : Response) : Promise<void> => {
    try {
        const {user_email} = req.body;

        if (!user_email) {
            res.status(400).json({message : "Email Address is required"});
            return ;
        }
        const userData = await userLibrary.userDataCall(user_email);
        if (userData) {
            res.status(200).json(userData);
        } else {
            res.status(404).json({ message : "User Not found or data unavailable"});
        }
    } catch ( error ) {
        res.status(500).json({message : "Failed fetching data"});
    }
}
