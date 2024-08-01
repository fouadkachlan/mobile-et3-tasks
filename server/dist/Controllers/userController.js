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
exports.userProfileData = exports.authenticateLoginAsAdmin = exports.authenticateLoginAsUser = exports.createAdmin = exports.createUser = void 0;
const userLibrary_1 = __importDefault(require("../Libraries/userLibrary"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_email, user_password, user_phone_number, user_country, user_role, user_name } = req.body;
        yield userLibrary_1.default.userCreateCall(user_email, user_password, user_phone_number, user_country, user_name);
        res.status(200).json({ message: "User Created Successfully" });
    }
    catch (error) {
        res.status(500).json({ error: `Error Creating User, ${error}` });
    }
});
exports.createUser = createUser;
const createAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_email, user_password, user_phone_number, user_country, user_role, user_name } = req.body;
        yield userLibrary_1.default.adminCreateCall(user_email, user_password, user_phone_number, user_country, user_name);
        res.status(200).json({ message: "User Created Successfully" });
    }
    catch (error) {
        res.status(500).json({ error: `Error Creating User, ${error}` });
    }
});
exports.createAdmin = createAdmin;
const authenticateLoginAsUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_email, user_password } = req.body;
        const result = yield userLibrary_1.default.userLoginCallAsUser(user_email, user_password);
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
exports.authenticateLoginAsUser = authenticateLoginAsUser;
const authenticateLoginAsAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_email, user_password } = req.body;
        const result = yield userLibrary_1.default.userLoginCallAsAdmin(user_email, user_password);
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
exports.authenticateLoginAsAdmin = authenticateLoginAsAdmin;
const userProfileData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_email } = req.body;
        if (!user_email) {
            res.status(400).json({ message: "Email Address is required" });
            return;
        }
        const userData = yield userLibrary_1.default.userDataCall(user_email);
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
