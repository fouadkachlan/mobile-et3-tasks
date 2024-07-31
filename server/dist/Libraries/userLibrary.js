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
const userSelect_1 = require("../Models/userSelect");
const userInsert_1 = require("../Models/userInsert");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utitilty_1 = require("../helpers/utitilty");
const ENCRYPTION_KEY = 'app';
const userLibrary = {
    userCreateCall: (user_email, user_password, user_phone_number, user_country, user_name) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const hashedPassword = yield (0, utitilty_1.hashPassword)(user_password);
            yield userInsert_1.userSignUp.registerAsUser(user_email, hashedPassword, user_phone_number, user_country, user_name);
            const result = { message: "Sign up success" };
            return result;
        }
        catch (error) {
            throw new Error(`Error in user create call, ${error}`);
        }
    }),
    adminCreateCall: (user_email, user_password, user_phone_Number, user_country, user_name) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const hashedPassword = yield (0, utitilty_1.hashPassword)(user_password);
            yield userInsert_1.userSignUp.registerAsAdmin(user_email, hashedPassword, user_phone_Number, user_country, user_name);
            const result = { message: "Sign up success" };
            return result;
        }
        catch (error) {
            throw new Error(`Error in admin create call, ${error}`);
        }
    }),
    userLoginCallAsUser: (user_email, user_password) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userSelect_1.getUserModel.LoginAsUser(user_email);
        if (!user) {
            throw new Error("User is not valid");
        }
        const isPasswordValid = yield bcryptjs_1.default.compare(user_password, user.user_password);
        if (!isPasswordValid) {
            throw new Error("Password is Invalid");
        }
        const token = jsonwebtoken_1.default.sign({ role: "user", email: user.user_email }, ENCRYPTION_KEY, { expiresIn: "1h" });
        const result = {
            message: "Login Successfull",
            token,
            user: {
                email: user.user_email,
                hashPassword: user.user_password,
                user_id: user.user_id
            }
        };
        return result;
    }),
    userLoginCallAsAdmin: (user_email, user_password) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userSelect_1.getUserModel.LoginAsAdmin(user_email);
        if (!user) {
            throw new Error("User Not Found");
        }
        const isPasswordValid = yield bcryptjs_1.default.compare(user_password, user.user_password);
        if (!isPasswordValid) {
            throw new Error("Invalid Password");
        }
        const result = {
            message: "Login Successfull",
            user: {
                email: user.user_email,
                hashPassword: user.user_password
            }
        };
        return result;
    }),
    userDataCall: (user_email) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield userSelect_1.getUserModel.fetchProfile(user_email);
            console.log("User : => ", user);
            if (user) {
                return {
                    user_email: user.user_email,
                    user_name: user.user_name,
                    user_phone_number: user.user_phone_number,
                    user_country: user.user_country
                };
            }
            else {
                return null;
            }
        }
        catch (error) {
            throw new Error(`Error while fetching user data, ${error}`);
        }
    }),
};
exports.default = userLibrary;
