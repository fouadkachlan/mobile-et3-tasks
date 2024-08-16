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
exports.changeProfileCountry = exports.changeProfileNumber = exports.changeProfileEmail = exports.changeProfileUserName = exports.userProfileData = exports.authenticateLoginAsAdmin = exports.authenticateLoginAsUser = exports.createAdmin = exports.createUser = void 0;
const userLibrary_1 = __importDefault(require("../Libraries/userLibrary"));
const Message_1 = require("../Constant/Message");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_email, user_password, user_phone_number, user_country, user_role, user_name } = req.body;
        yield userLibrary_1.default.userCreateCall(user_email, user_password, user_phone_number, user_country, user_name);
        res.status(200).json({ message: Message_1.UserMessages.Success.userCreateSuccess });
    }
    catch (error) {
        res.status(500).json({ error: Message_1.UserMessages.Fail.userCreateError });
    }
});
exports.createUser = createUser;
const createAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_email, user_password, user_phone_number, user_country, user_role, user_name } = req.body;
        yield userLibrary_1.default.adminCreateCall(user_email, user_password, user_phone_number, user_country, user_name);
        res.status(200).json({ message: Message_1.UserMessages.Success.userCreateSuccess });
    }
    catch (error) {
        res.status(500).json({ error: Message_1.UserMessages.Fail.userCreateError });
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
            res.status(401).json({ error: Message_1.UserMessages.Fail.emailAndPasswordError });
        }
    }
    catch (error) {
        res.status(500).json({ message: Message_1.ServerStatus.Error.internalServerError });
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
            res.status(401).json({ error: Message_1.UserMessages.Fail.emailAndPasswordError });
        }
    }
    catch (error) {
        res.status(500).json({ message: Message_1.ServerStatus.Error.internalServerError });
    }
});
exports.authenticateLoginAsAdmin = authenticateLoginAsAdmin;
const userProfileData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_email } = req.body;
        if (!user_email) {
            res.status(400).json({ message: Message_1.UserMessages.Fail.emailIsRequiredError });
            return;
        }
        const userData = yield userLibrary_1.default.userDataCall(user_email);
        if (userData) {
            res.status(200).json(userData);
        }
        else {
            res.status(404).json({ message: Message_1.UserMessages.Fail.userNotFoundError });
        }
    }
    catch (error) {
        res.status(500).json({ message: Message_1.UserMessages.Fail.fetchDataError });
    }
});
exports.userProfileData = userProfileData;
const changeProfileUserName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_name, user_id } = req.body;
        yield userLibrary_1.default.userUpdateUserNameCall(user_name, user_id);
        res.status(200).json({ message: Message_1.UserMessages.Success.UpdateSuccessfull });
    }
    catch (error) {
        res.status(500).json({ message: Message_1.ServerStatus.Error.internalServerError });
    }
});
exports.changeProfileUserName = changeProfileUserName;
const changeProfileEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_email, user_id } = req.body;
        yield userLibrary_1.default.userUpdateEmailCall(user_email, user_id);
        res.status(200).json({ message: Message_1.UserMessages.Success.UpdateSuccessfull });
    }
    catch (error) {
        res.status(500).json({ message: Message_1.ServerStatus.Error.internalServerError });
    }
});
exports.changeProfileEmail = changeProfileEmail;
const changeProfileNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_phone_number, user_id } = req.body;
        yield userLibrary_1.default.userUpdateNumberCall(user_phone_number, user_id);
        res.status(200).json({ message: Message_1.UserMessages.Success.UpdateSuccessfull });
    }
    catch (error) {
        res.status(500).json({ message: Message_1.ServerStatus.Error.internalServerError });
    }
});
exports.changeProfileNumber = changeProfileNumber;
const changeProfileCountry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_country, user_id } = req.body;
        yield userLibrary_1.default.userUpdateCountryCall(user_country, user_id);
        res.status(200).json({ message: Message_1.UserMessages.Success.UpdateSuccessfull });
    }
    catch (error) {
        res.status(500).json({ message: Message_1.ServerStatus.Error.internalServerError });
    }
});
exports.changeProfileCountry = changeProfileCountry;
