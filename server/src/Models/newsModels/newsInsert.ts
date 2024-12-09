import { executeQuery, pool } from "../../utils/database";


export const newsInsert = {
    insertNews: async ( user_id : number , news_content: string): Promise<void> => {
        const userIdEscapedParameter : number = user_id; //here we don't need to escape id because id are INT in MySQL storage and INTs are not required to be escaped 
        const newsContentEscapedParameter : string = pool.escape(news_content); 
        const insertNewsQuery : string  = 
        `
            INSERT INTO news(news_written_by,date_of_news,news_content)
            VALUES (${userIdEscapedParameter},CURDATE(),${newsContentEscapedParameter})
        `;
        await executeQuery(insertNewsQuery, []);
    },
    
}