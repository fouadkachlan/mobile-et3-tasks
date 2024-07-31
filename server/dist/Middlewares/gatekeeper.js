"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ENCRYPTION_KEY = "app";
if (!ENCRYPTION_KEY) {
    console.error("ENCRYPTION_KEY is not defined.");
}
const gateKeeper = (roles = []) => {
    return (req, res, next) => {
        const authHeader = req.get("Authorization");
        if (!authHeader) {
            return res.status(401).json({ message: "Authorization header missing" });
        }
        const token = authHeader.startsWith("Bearer") ? authHeader.split(" ")[1] : authHeader;
        if (!token) {
            return res.status(401).json({ message: "Token missing" });
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(token, ENCRYPTION_KEY);
            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).json({ message: "Forbidden: You don't have the required role" });
            }
            req.user = decoded;
            next();
        }
        catch (error) {
            if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
                return res.status(401).json({ message: "Invalid token" });
            }
            else if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
                return res.status(401).json({ message: "Token expired" });
            }
            else {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        }
    };
};
exports.default = gateKeeper;
