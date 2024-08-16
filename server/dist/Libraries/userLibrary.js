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
const userSelect_1 = require("../Models/userModels/userSelect");
const userInsert_1 = require("../Models/userModels/userInsert");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utitilty_1 = require("../helpers/utitilty");
const User_1 = require("../Constant/User");
const Message_1 = require("../Constant/Message");
const Models_1 = require("../Models");
const userLibrary = {
    userCreateCall: (user_email, user_password, user_phone_number, user_country, user_name) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const hashedPassword = yield (0, utitilty_1.hashPassword)(user_password);
            yield userInsert_1.userInsert.registerAsUser(user_email, hashedPassword, user_phone_number, user_country, user_name);
            const result = { message: Message_1.UserMessages.Success.userSignUpSuccess };
            return result;
        }
        catch (error) {
            throw new Error(Message_1.UserMessages.Fail.userCreateError);
        }
    }),
    adminCreateCall: (user_email, user_password, user_phone_Number, user_country, user_name) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const hashedPassword = yield (0, utitilty_1.hashPassword)(user_password);
            yield userInsert_1.userInsert.registerAsAdmin(user_email, hashedPassword, user_phone_Number, user_country, user_name);
            const result = { message: Message_1.UserMessages.Success.userSignUpSuccess };
            return result;
        }
        catch (error) {
            throw new Error(Message_1.UserMessages.Fail.adminCreateError);
        }
    }),
    userLoginCallAsUser: (user_email, user_password) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userSelect_1.userSelect.LoginAsUser(user_email);
        if (!user) {
            throw new Error(Message_1.UserMessages.Fail.userNotValidError);
        }
        const isPasswordValid = yield bcryptjs_1.default.compare(user_password, user.user_password);
        if (!isPasswordValid) {
            throw new Error(Message_1.UserMessages.Fail.emailAndPasswordError);
        }
        const token = jsonwebtoken_1.default.sign({ role: "user", email: user.user_email }, User_1.ENCRYPTION_KEY, { expiresIn: "1h" });
        const result = {
            message: Message_1.UserMessages.Success.LoginSuccessfull,
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
        const user = yield userSelect_1.userSelect.LoginAsAdmin(user_email);
        if (!user) {
            throw new Error(Message_1.UserMessages.Fail.userNotFoundError);
        }
        const isPasswordValid = yield bcryptjs_1.default.compare(user_password, user.user_password);
        if (!isPasswordValid) {
            throw new Error(Message_1.UserMessages.Fail.emailAndPasswordError);
        }
        const result = {
            message: Message_1.UserMessages.Success.LoginSuccessfull,
            user: {
                email: user.user_email,
                hashPassword: user.user_password
            }
        };
        return result;
    }),
    userDataCall: (user_email) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield userSelect_1.userSelect.fetchProfile(user_email);
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
            throw new Error(Message_1.UserMessages.Fail.fetchDataError);
        }
    }),
    userUpdateUserNameCall: (user_name, user_id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield Models_1.userModels.update.userUpdateUsernameModels(user_name, user_id);
        }
        catch (error) {
            throw new Error(Message_1.UserMessages.Fail.UpdateError);
        }
    }),
    userUpdateEmailCall: (user_email, user_id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield Models_1.userModels.update.userUpdateEmailModels(user_email, user_id);
        }
        catch (error) {
            throw new Error(Message_1.UserMessages.Fail.UpdateError);
        }
    }),
    userUpdateNumberCall: (user_phone_number, user_id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield Models_1.userModels.update.userUpdateNumberModels(user_phone_number, user_id);
        }
        catch (error) {
            throw new Error(Message_1.UserMessages.Fail.UpdateError);
        }
    }),
    userUpdateCountryCall: (user_country, user_id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield Models_1.userModels.update.userUpdateCountryModels(user_country, user_id);
        }
        catch (error) {
            throw new Error(Message_1.UserMessages.Fail.UpdateError);
        }
    })
};
exports.default = userLibrary;
