import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ENCRYPTION_KEY } from "../Constant/User";
import { MiddlewareMessages, ServerStatus } from "../Constant/Message";

if (!ENCRYPTION_KEY) {
    console.error(MiddlewareMessages.GateKeeper.Fail.encryptionKeyNotDefinedError);
}
const gateKeeper = (roles: string[] = []) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.get("Authorization");

        if (!authHeader) {
            return res.status(401).json({ message: MiddlewareMessages.GateKeeper.Fail.authorizationHeaderMissingError });
        }

        const token = authHeader.startsWith("Bearer") ? authHeader.split(" ")[1] : authHeader;
        
        if (!token) {
            return res.status(401).json({ message: MiddlewareMessages.GateKeeper.Fail.tokenMissingError});
        }

        

        try {
            const decoded : JwtPayload = jwt.verify(token, ENCRYPTION_KEY ) ;

            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).json({ message: MiddlewareMessages.GateKeeper.Fail.roleError });
            }

            req.user = decoded;
            next();
        } catch (error) {
            if (error instanceof jwt.JsonWebTokenError) {
                return res.status(401).json({ message: MiddlewareMessages.GateKeeper.Fail.invalidToken});
            } else if (error instanceof jwt.TokenExpiredError) {
                return res.status(401).json({ message: MiddlewareMessages.GateKeeper.Fail.tokenExpired });
            } else {
                console.error(error);
                return res.status(500).json({ message:ServerStatus.Error.internalServerError });
            }
        }
    };
};

export default gateKeeper;
