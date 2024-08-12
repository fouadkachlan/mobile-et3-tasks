import { executeQuery, pool } from "../../utils/database";
import { RateLimit } from "../../Types/RateLimit/RateLimitType";
import { rateLimitSelect } from "./rateLimitSelect";


export const rateLimitInsert = {
     updateRateLimit : async (user_ip: string, limit_type: string, time_window: number, limit_count: number): Promise<RateLimit | null> => {
        
        const userIPEscaped : string = pool.escape(user_ip);
        const limitTypeEscaped : string = pool.escape(limit_type);
        const updateRateLimitQuery = `
            INSERT INTO news_reader_app.rates_limits
            (user_ip, limit_type, limit_count, current_count ,time_window, reset_time)
            VALUES (${userIPEscaped}, ${limitTypeEscaped},${limit_count}, 1 ,${time_window} , NOW() + INTERVAL ${time_window} SECOND)
            ON DUPLICATE KEY UPDATE 
                current_count = IF(current_count < limit_count, current_count + 1, current_count),
                reset_time = IF(reset_time > NOW(), reset_time, NOW() + INTERVAL ${time_window} SECOND);
        `;
        await executeQuery<RateLimit>(updateRateLimitQuery, []);
        const updatedLimit = await rateLimitSelect.getRateLimit(user_ip, limit_type);
        return updatedLimit;
    }
}