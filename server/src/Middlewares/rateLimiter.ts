import rateLimit from "express-rate-limit";
import { Request } from "express";

const rateLimitOptions = { 
    default: {
        max: 3,
        windowMs: 60  * 1000,
    },

    routes: {
        "/createUser": { max: 1, windowMs: 60 * 1000 } 
    }
};

const createRateLimiter = (options: { windowMs: number; max: number }) => {
    return rateLimit({
        windowMs: options.windowMs,
        max: options.max,
        message: "Too many requests, please try again later.",
        keyGenerator: (req: Request) => {
            return req.ip || "unknown_IP";
        }
    });
};

export const userSignUpRateLimiter = createRateLimiter(rateLimitOptions.routes["/createUser"]);
export const defaultRateLimiter = createRateLimiter(rateLimitOptions.default);
