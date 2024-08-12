import { NextFunction, Request, Response } from "express";
import { MiddlewareMessages } from "../Constant/Message";
import { rateLimitSelect } from "../Models/rateLimitModels/rateLimitSelect";
import { rateLimitInsert } from "../Models/rateLimitModels/rateLimitInsert";
import { RateLimit } from "../Types/RateLimit/RateLimitType";

const rateLimitMiddleware = (option: { windowMs: number; max: number; limitType: string }) => async (req: Request, res: Response, next: NextFunction) => {
    const ip_Address : string = req.ip;
    const { windowMs, max, limitType } = option;

    try {
        const rateLimit : RateLimit | null = await rateLimitSelect.getRateLimit(ip_Address, limitType);
        if (rateLimit && rateLimit.current_count >= max) {
            console.log(MiddlewareMessages.RateLimiter.Fail.toManyRequests);
            res.status(429).send(MiddlewareMessages.RateLimiter.Fail.toManyRequests);
            return;
        }
        await rateLimitInsert.updateRateLimit(ip_Address, limitType, Math.floor(windowMs / 1000), max);
        next();
    } catch (error) {
        console.log("Error in rate limit middleware", error);
        res.status(500).send("Internal Server Error");
    }
};

export const loginUserRateLimiter = rateLimitMiddleware({
    windowMs: 60 * 1000,
    max: 5,
    limitType: "Login Rate Limit"
});

export const defaultRateLimiter = rateLimitMiddleware({
    windowMs: 60 * 1000,
    max: 10,
    limitType: "Default Rate Limit"
})
