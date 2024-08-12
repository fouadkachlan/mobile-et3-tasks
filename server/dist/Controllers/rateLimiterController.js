"use strict";
// import { Request, Response } from "express";
// import rateLimitLibrary from "../Libraries/rateLimiterLibrary";
// import { RateLimitStatus } from "../Constant/Message";
// export const getRateLimiter = async (req : Request , res : Response ) : Promise<void> => {
//     try {
//         const {rate_limit_id} = req.body;
//         const fouadIp = req.ip;
//         // console.log(fouadIp);
//         await rateLimitLibrary.getRateLimit(rate_limit_id);
//         res.status(200).json({message : RateLimitStatus.Success.RateLimitControllerSuccess })
//     } catch ( error ) {
//         res.status(500).json({message :RateLimitStatus.Fail.RateLimitControllerFail});
//     }
// }
