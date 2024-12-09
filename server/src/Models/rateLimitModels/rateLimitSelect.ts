import { executeQuery, pool } from "../../utils/database";
import { RateLimit } from "../../Types/RateLimit/RateLimitType";



export const rateLimitSelect = {
     getRateLimit : async (user_ip: string, limit_type: string): Promise<RateLimit | null> => {
        const userIPEscaped : string = pool.escape(user_ip);
        const limitTypeEscaped : string = pool.escape(limit_type);
        const getRateLimitQuery = `
            SELECT * 
            FROM news_reader_app.rates_limits
            WHERE user_ip = ${userIPEscaped} AND limit_type = ${limitTypeEscaped} AND reset_time > NOW();
        `;
        const result: RateLimit[] = await executeQuery<RateLimit>(getRateLimitQuery, []);
        return result.length ? result[0] : null;
    }
}

