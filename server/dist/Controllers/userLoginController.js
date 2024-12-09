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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfileData = exports.authenticateLoginUser = exports.createUser = void 0;
const utitilty_1 = require("../helpers/utitilty");
const userLibrary_1 = __importDefault(require("../Libraries/userLibrary"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email_Address, Password, phone_Number, user_Country } = req.body;
        const hashedPassword = yield (0, utitilty_1.hashPassword)(Password);
        yield userLibrary_1.default.userCreateCall(email_Address, hashedPassword, phone_Number, user_Country);
        res.status(200).json({ message: "User Created Successfully" });
    }
    catch (error) {
        res.status(500).json({ error: `Error Creating User, ${error}` });
    }
});
exports.createUser = createUser;
const authenticateLoginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email_Address, Password } = req.body;
        const result = yield userLibrary_1.default.userLoginCall(email_Address, Password);
        if (result) {
            res.status(200).json(result);
        }
        else {
            console.log("Sending error response: Invalid email or password");
            res.status(401).json({ error: "Invalid email or password" });
        }
    }
    catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.authenticateLoginUser = authenticateLoginUser;
const userProfileData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email_Address } = req.body;
        if (!email_Address) {
            res.status(400).json({ message: "Email Address is required" });
            return;
        }
        const userData = yield userLibrary_1.default.userDataCall(email_Address);
        // console.log(userData)
        if (userData) {
            res.status(200).json(userData);
        }
        else {
            res.status(404).json({ message: "User Not found or data unavailable" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Failed fetching data" });
    }
});
exports.userProfileData = userProfileData;
