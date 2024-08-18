import { Request, Response } from 'express';
import newsLibrary from '../Libraries/newsLibrary';
import { NewsMessages, ServerStatus } from '../Constant/Message';
import { AddNewsRequestBody } from '../Types/NewsRequests/newsRequestsTypes';



export const addNews = async (req: Request<{},{},AddNewsRequestBody>, res: Response): Promise<void> => {
    try {
        const {user_id , news_content} : AddNewsRequestBody= req.body;
        await newsLibrary.addNewsForUser(user_id , news_content);
        res.status(200).json({ message: NewsMessages.Success.successNewsAddMessage });
    } catch (error) {
        res.status(500).json({ error: NewsMessages.Fail.errorNewsAddMessage });
    }
};


export const getAllNews = async (req: Request , res: Response ) : Promise<void> => {
    try {
        const newData = await newsLibrary.fetchingAllNews();
        res.status(200).json(newData);
    } catch ( error ) {
        res.status(500).json({error : ServerStatus.Error.internalServerError})
    }
};


