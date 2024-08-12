"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../Constant/User");
const Message_1 = require("../Constant/Message");
if (!User_1.ENCRYPTION_KEY) {
    console.error(Message_1.MiddlewareMessages.GateKeeper.Fail.encryptionKeyNotDefinedError);
}
const expectedFields = {
    "/createUser": ["user_email", "user_password", "user_phone_number", "user_country", "user_name"],
    "/createAdmin": ["user_email", "user_password", "user_phone_number", "user_country", "user_name"],
    "/loginUser": ["user_email", "user_password"],
    "/getUserProfileData": ["user_email"],
    "/addNews": ["user_id", "news_content"],
    "/news": []
};
const gateKeeper = (roles = [], route) => {
    return (req, res, next) => {
        const authHeader = req.get("Authorization");
        if (!authHeader) {
            return res.status(401).json({ message: Message_1.MiddlewareMessages.GateKeeper.Fail.authorizationHeaderMissingError });
        }
        const token = authHeader.startsWith("Bearer") ? authHeader.split(" ")[1] : authHeader;
        if (!token) {
            return res.status(401).json({ message: Message_1.MiddlewareMessages.GateKeeper.Fail.tokenMissingError });
        }
        // console.log("Authentication header:" , authHeader);
        // console.log("Token : " , token);
        try {
            const decoded = jsonwebtoken_1.default.verify(token, User_1.ENCRYPTION_KEY);
            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).json({ message: Message_1.MiddlewareMessages.GateKeeper.Fail.roleError });
            }
            const expected = expectedFields[route];
            if (expected) {
                const receivedFields = Object.keys(req.body);
                const hasExtraFields = receivedFields.some((field) => !expected.includes(field));
                if (hasExtraFields) {
                    return res.status(400).json({ message: Message_1.MiddlewareMessages.GateKeeper.Fail.unexpectedFieldError });
                }
            }
            req.user = decoded;
            next();
        }
        catch (error) {
            if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
                return res.status(401).json({ message: Message_1.MiddlewareMessages.GateKeeper.Fail.invalidToken });
            }
            else if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
                return res.status(401).json({ message: Message_1.MiddlewareMessages.GateKeeper.Fail.tokenExpired });
            }
            else {
                console.error(error);
                return res.status(500).json({ message: Message_1.ServerStatus.Error.internalServerError });
            }
        }
    };
};
exports.default = gateKeeper;
