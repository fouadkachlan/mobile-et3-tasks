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
exports.defaultRateLimiter = exports.loginUserRateLimiter = void 0;
const Message_1 = require("../Constant/Message");
const rateLimitSelect_1 = require("../Models/rateLimitModels/rateLimitSelect");
const rateLimitInsert_1 = require("../Models/rateLimitModels/rateLimitInsert");
const rateLimitMiddleware = (option) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const ip_Address = req.ip;
    const { windowMs, max, limitType } = option;
    try {
        const rateLimit = yield rateLimitSelect_1.rateLimitSelect.getRateLimit(ip_Address, limitType);
        if (rateLimit && rateLimit.current_count >= max) {
            console.log(Message_1.MiddlewareMessages.RateLimiter.Fail.toManyRequests);
            res.status(429).send(Message_1.MiddlewareMessages.RateLimiter.Fail.toManyRequests);
            return;
        }
        yield rateLimitInsert_1.rateLimitInsert.updateRateLimit(ip_Address, limitType, Math.floor(windowMs / 1000), max);
        next();
    }
    catch (error) {
        console.log("Error in rate limit middleware", error);
        res.status(500).send("Internal Server Error");
    }
});
exports.loginUserRateLimiter = rateLimitMiddleware({
    windowMs: 60 * 1000,
    max: 5,
    limitType: "Login Rate Limit"
});
exports.defaultRateLimiter = rateLimitMiddleware({
    windowMs: 60 * 1000,
    max: 100,
    limitType: "Default Rate Limit"
});
