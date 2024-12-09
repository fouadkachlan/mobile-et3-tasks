"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimitSelect = void 0;
const database_1 = require("../../utils/database");
exports.rateLimitSelect = {
    fetchRateLimit: (rate_limit_id) => __awaiter(void 0, void 0, void 0, function* () {
        const rateLimitIdParameter = rate_limit_id;
        const fetchRateLimitQuery = `
            SELECT * 
            FROM rates_limits
            WHERE rate_limit_id = ${rateLimitIdParameter}
        `;
        const result = yield (0, database_1.executeQuery)(fetchRateLimitQuery, []);
        console.log(result);
        if (result.length == 0) {
            return null;
        }
        return {
            rate_limit_id: result[0].rate_limit_id,
            user_id: result[0].user_id,
            user_ip: result[0].user_ip,
            limit_type: result[0].limit_type,
            limit_count: result[0].limit_count,
            current_count: result[0].current_count,
            time_window: result[0].time_window,
            reset_time: result[0].reset_time,
            created_at: result[0].created_at
        };
    })
};
