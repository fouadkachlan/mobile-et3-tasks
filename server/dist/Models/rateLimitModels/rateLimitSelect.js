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
    getRateLimit: (user_ip, limit_type) => __awaiter(void 0, void 0, void 0, function* () {
        const userIPEscaped = database_1.pool.escape(user_ip);
        const limitTypeEscaped = database_1.pool.escape(limit_type);
        const getRateLimitQuery = `
            SELECT * 
            FROM news_reader_app.rates_limits
            WHERE user_ip = ${userIPEscaped} AND limit_type = ${limitTypeEscaped} AND reset_time > NOW();
        `;
        const result = yield (0, database_1.executeQuery)(getRateLimitQuery, []);
        return result.length ? result[0] : null;
    })
};
