import { executeQuery } from "../utils/database";
import { News } from "../Interfaces/newsProps";
import { User, userFetchDataProps, userProps } from "../Interfaces/userProps";
export const newsModel = {
    insertNews: async ( user_id : number , news_content: string): Promise<void> => {
        const insertNewsQuery : string  = 'INSERT INTO `news_reader_app`.`news`(`news_written_by`,`date_of_news`,`news_content`) VALUES (?,CURDATE(),?)';

        await executeQuery(insertNewsQuery, [ user_id ,news_content]);
    },
    fetchAllNewsData : async () : Promise<News[]> => {
        const allNewsDataQuery : string  = "SELECT user_name,date_of_news, news_content FROM `news_reader_app`.`news` n , `news_reader_app`.`users` u WHERE u.`user_id` = n.`news_written_by`";
        const result = await executeQuery<News>(allNewsDataQuery,[]);
        return result;
    }
}