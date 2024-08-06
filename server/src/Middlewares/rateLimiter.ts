import rateLimit from "express-rate-limit";
import { Request } from "express";
import { MiddlewareMessages } from "../Constant/Message";
import { executeQuery, pool } from "../utils/database";









const rateLimitOptions = { 
    default: {
        max: 3,
        windowMs: 60  * 1000,
    },

    routes: {
        "/createUser": { max: 5, windowMs: 60 * 1000 } 
    }
};

const createRateLimiter = (options: { windowMs: number; max: number }) => {
    return rateLimit({
        windowMs: options.windowMs,
        max: options.max,
        message:MiddlewareMessages.RateLimiter.Fail.toManyRequests,
        keyGenerator: (req: Request) => {
            return req.ip || "unknown_IP";
        }
    });
};

export const userSignUpRateLimiter = createRateLimiter(rateLimitOptions.routes["/createUser"]);
export const defaultRateLimiter = createRateLimiter(rateLimitOptions.default);
