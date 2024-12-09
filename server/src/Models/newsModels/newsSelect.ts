import { executeQuery } from "../../utils/database";
import { News } from "../../Types/newsProps";

export const newsSelect = {
    fetchAllNewsData : async () : Promise<News[]> => {
        const allNewsDataQuery : string  = 
        `
            SELECT user_name,date_of_news, news_content
            FROM news n , users u 
            WHERE u.user_id = n.news_written_by
        `;
        const result = await executeQuery<News>(allNewsDataQuery,[]);
        return result;
    }
}