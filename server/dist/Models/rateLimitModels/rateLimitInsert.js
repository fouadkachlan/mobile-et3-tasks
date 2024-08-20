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
exports.rateLimitInsert = void 0;
const database_1 = require("../../utils/database");
const rateLimitSelect_1 = require("./rateLimitSelect");
exports.rateLimitInsert = {
    updateRateLimit: (user_ip, limit_type, time_window, limit_count) => __awaiter(void 0, void 0, void 0, function* () {
        const userIPEscaped = database_1.pool.escape(user_ip);
        const limitTypeEscaped = database_1.pool.escape(limit_type);
        const updateRateLimitQuery = `
            INSERT INTO news_reader_app.rates_limits
            (user_ip, limit_type, limit_count, current_count, time_window, reset_time)
            VALUES (${userIPEscaped}, ${limitTypeEscaped}, ${limit_count}, 1, ${time_window}, NOW() + INTERVAL ${time_window} SECOND)
            ON DUPLICATE KEY UPDATE 
                current_count = IF(NOW() > reset_time AND current_count >= limit_count, 0 AND updated_at = NOW(), IF(current_count < limit_count, current_count + 1, current_count)),
                reset_time = IF(NOW() > reset_time, NOW() + INTERVAL ${time_window} SECOND, reset_time);
        `;
        yield (0, database_1.executeQuery)(updateRateLimitQuery, []);
        const updatedLimit = yield rateLimitSelect_1.rateLimitSelect.getRateLimit(user_ip, limit_type);
        return updatedLimit;
    })
};
