import { NewsMessages } from "../Constant/Message";
import { News } from "../Types/newsProps";
import { newsInsert } from "../Models/newsModels/newsInsert";
import { newsSelect } from "../Models/newsModels/newsSelect";

const newsLibrary = {
     addNewsForUser : async (user_id: number, news_content: string): Promise<void> => {
        try {
            await newsInsert.insertNews(user_id, news_content);
        } catch (error) {
            throw new Error(NewsMessages.Fail.errorNewsAddMessage);
        }
    },
    fetchingAllNews: async (): Promise<News[]> => {
     try {
        return await newsSelect.fetchAllNewsData();
     } catch ( error ) {
        throw new Error(NewsMessages.Fail.errorNewsFetchMessage);
     }
    }
}
export default newsLibrary