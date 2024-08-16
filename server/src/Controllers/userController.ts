import { Request, Response } from 'express';
import userLibrary from '../Libraries/userLibrary';
import { ServerStatus, UserMessages } from '../Constant/Message';
import { adminCreateRequestBody, adminLoginRequestBody, changeProfileDataBody, fetchUserdataRequestBody, userCreateRequestBody, userLoginRequestBody } from '../Types/UsersRequests/userRequestsTypes';




export const createUser = async (req : Request<{},{},userCreateRequestBody> , res : Response) : Promise<void> => {
    try {
        const { user_email , user_password , user_phone_number ,user_country , user_role , user_name } = req.body;
        await userLibrary.userCreateCall(user_email , user_password , user_phone_number ,user_country , user_name);
        res.status(200).json({message : UserMessages.Success.userCreateSuccess});
    } catch (error) {
        res.status(500).json({error : UserMessages.Fail.userCreateError});
    }
}


export const createAdmin = async (req : Request<{},{},adminCreateRequestBody> , res : Response) : Promise<void> => {
    try {
        const { user_email , user_password , user_phone_number ,user_country , user_role , user_name} = req.body;
        await userLibrary.adminCreateCall(user_email , user_password , user_phone_number ,user_country , user_name);
        
        res.status(200).json({message : UserMessages.Success.userCreateSuccess});
    } catch (error) {
        res.status(500).json({error : UserMessages.Fail.userCreateError});
    }
}


export const authenticateLoginAsUser = async (req: Request<{},{},userLoginRequestBody> , res : Response) : Promise<void>=> {
    try {
        const {user_email , user_password} = req.body;
        const result = await userLibrary.userLoginCallAsUser(user_email , user_password);
        if ( result ) {
            res.status(200).json(result);
        }
        else {
            res.status(401).json({error : UserMessages.Fail.emailAndPasswordError})
        }
    } catch ( error ) {
        res.status(500).json({message : ServerStatus.Error.internalServerError});
    }
}

export const authenticateLoginAsAdmin = async (req: Request<{},{},adminLoginRequestBody> , res : Response) : Promise<void>=> {
    try {
        const {user_email , user_password} = req.body;
        const result = await userLibrary.userLoginCallAsAdmin(user_email , user_password);
        if ( result ) {
            res.status(200).json(result);
        }
        else {
            res.status(401).json({error : UserMessages.Fail.emailAndPasswordError})
        }
    } catch ( error ) {
        res.status(500).json({message : ServerStatus.Error.internalServerError});
    }
}


export const userProfileData = async (req : Request<{},{},fetchUserdataRequestBody> , res : Response) : Promise<void> => {
    try {
        const {user_email} = req.body;

        if (!user_email) {
            res.status(400).json({message : UserMessages.Fail.emailIsRequiredError});
            return ;
        }
        const userData = await userLibrary.userDataCall(user_email);
        if (userData) {
            res.status(200).json(userData);
        } else {
            res.status(404).json({ message : UserMessages.Fail.userNotFoundError});
        }
    } catch ( error ) {
        res.status(500).json({message : UserMessages.Fail.fetchDataError});
    }
}


export const changeProfileUserName = async ( req : Request<{},{},changeProfileDataBody> , res : Response ) : Promise<void> => {
    try {
        const {user_name , user_id} : changeProfileDataBody = req.body;
        await userLibrary.userUpdateUserNameCall(user_name, user_id);
        res.status(200).json({message : UserMessages.Success.UpdateSuccessfull})

    } catch ( error ) {
        res.status(500).json({message : ServerStatus.Error.internalServerError})
    }
}
export const changeProfileEmail = async ( req : Request<{},{},changeProfileDataBody> , res : Response ) : Promise<void> => {
    try {
        const {user_email , user_id} : changeProfileDataBody = req.body;
        await userLibrary.userUpdateEmailCall(user_email, user_id);
        res.status(200).json({message : UserMessages.Success.UpdateSuccessfull})

    } catch ( error ) {
        res.status(500).json({message : ServerStatus.Error.internalServerError})
    }
}
export const changeProfileNumber = async ( req : Request<{},{},changeProfileDataBody> , res : Response ) : Promise<void> => {
    try {
        const {user_phone_number, user_id} : changeProfileDataBody = req.body;
        await userLibrary.userUpdateNumberCall(user_phone_number, user_id);
        res.status(200).json({message : UserMessages.Success.UpdateSuccessfull})

    } catch ( error ) {
        res.status(500).json({message : ServerStatus.Error.internalServerError})
    }
}
export const changeProfileCountry = async ( req : Request<{},{},changeProfileDataBody> , res : Response ) : Promise<void> => {
    try {
        const {user_country, user_id} : changeProfileDataBody = req.body;
        await userLibrary.userUpdateCountryCall(user_country, user_id);
        res.status(200).json({message : UserMessages.Success.UpdateSuccessfull})

    } catch ( error ) {
        res.status(500).json({message : ServerStatus.Error.internalServerError})
    }
}