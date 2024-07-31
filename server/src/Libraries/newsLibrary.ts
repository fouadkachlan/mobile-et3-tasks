import { newsModel } from "../Models/newsModel";
import { News } from "../Interfaces/newsProps";

const newsLibrary = {
     addNewsForUser : async (user_id: number, news_content: string): Promise<void> => {
        try {
            await newsModel.insertNews(user_id, news_content);
            
            console.log('News added successfully.');
        } catch (error) {
            console.error('Error while adding news to the news library:', error);
            throw new Error('Failed to add news. Please try again later.');
        }
    },
    fetchingAllNews: async (): Promise<News[]> => {
     try {
        return await newsModel.fetchAllNewsData();
     } catch ( error ) {
        throw new Error("Failed to fetch news");
     }
    }
}
export default newsLibrary