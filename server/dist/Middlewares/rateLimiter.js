"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRateLimiter = exports.userSignUpRateLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const Message_1 = require("../Constant/Message");
const rateLimitOptions = {
    default: {
        max: 3,
        windowMs: 60 * 1000,
    },
    routes: {
        "/createUser": { max: 5, windowMs: 60 * 1000 }
    }
};
const createRateLimiter = (options) => {
    return (0, express_rate_limit_1.default)({
        windowMs: options.windowMs,
        max: options.max,
        message: Message_1.MiddlewareMessages.RateLimiter.Fail.toManyRequests,
        keyGenerator: (req) => {
            return req.ip || "unknown_IP";
        }
    });
};
exports.userSignUpRateLimiter = createRateLimiter(rateLimitOptions.routes["/createUser"]);
exports.defaultRateLimiter = createRateLimiter(rateLimitOptions.default);
