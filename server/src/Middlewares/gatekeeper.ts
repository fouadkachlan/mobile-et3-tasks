import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";


const ENCRYPTION_KEY  = "app";
if (!ENCRYPTION_KEY) {
    console.error("ENCRYPTION_KEY is not defined.");
}
const gateKeeper = (roles: string[] = []) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.get("Authorization");

        if (!authHeader) {
            return res.status(401).json({ message: "Authorization header missing" });
        }

        const token = authHeader.startsWith("Bearer") ? authHeader.split(" ")[1] : authHeader;
        
        if (!token) {
            return res.status(401).json({ message: "Token missing" });
        }

        try {
            const decoded = jwt.verify(token, ENCRYPTION_KEY ) as JwtPayload;

            if (roles.length && !roles.includes(decoded.role as string)) {
                return res.status(403).json({ message: "Forbidden: You don't have the required role" });
            }

            req.user = decoded;
            next();
        } catch (error) {
            if (error instanceof jwt.JsonWebTokenError) {
                return res.status(401).json({ message: "Invalid token" });
            } else if (error instanceof jwt.TokenExpiredError) {
                return res.status(401).json({ message: "Token expired" });
            } else {
                console.error(error);
                return res.status(500).json({ message: "Internal server error" });
            }
        }
    };
};

export default gateKeeper;
