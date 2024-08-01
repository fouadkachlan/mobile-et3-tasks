import { Request, Response } from 'express';
import newsLibrary from '../Libraries/newsLibrary';



export const addNews = async (req: Request, res: Response): Promise<void> => {
    try {
        const {user_id , news_content} = req.body;
        console.log("Request Body:", user_id , news_content);
        await newsLibrary.addNewsForUser(user_id , news_content);
        console.log("News added successfully");
        res.status(200).json({ message: "News added successfully" });
    } catch (error) {
        console.error("Error adding news:", error);
        res.status(500).json({ message: 'Error Has occurred when adding news', error });
    }
};


export const getAllNews = async (req: Request , res: Response ) : Promise<void> => {
    try {
        const newData = await newsLibrary.fetchingAllNews();
        res.status(200).json(newData);
    } catch ( error ) {
        console.error("Error while fetching News!", error);
        res.status(500).json({error : "Internal server error"})
    }
};


