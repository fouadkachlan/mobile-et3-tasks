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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSignUp = void 0;
const database_1 = require("../utils/database");
exports.userSignUp = {
    registerAsAdmin: (user_email, hashedPassword, user_phone_number, user_country, user_name) => __awaiter(void 0, void 0, void 0, function* () {
        const userEmailParameter = user_email;
        const hashedPasswordParameter = hashedPassword;
        const phoneNumberparameter = user_phone_number;
        const userCountryParameter = user_country;
        const userNameParameter = user_name;
        const registerUser = `
            INSERT INTO users (user_email, user_password, user_phone_number, user_country , user_role , user_name)
            VALUES ('${userEmailParameter}','${hashedPasswordParameter}','${phoneNumberparameter}','${userCountryParameter}','admin','${userNameParameter}')
        `;
        yield (0, database_1.executeQuery)(registerUser, []);
    }),
    registerAsUser: (user_email, hashedPassword, user_phone_number, user_country, user_name) => __awaiter(void 0, void 0, void 0, function* () {
        const userEmailParameter = user_email;
        const hashedPasswordParameter = hashedPassword;
        const phoneNumberparameter = user_phone_number;
        const userCountryParameter = user_country;
        const userNameParameter = user_name;
        const registerUser = `
            INSERT INTO users (user_email, user_password, user_phone_number, user_country , user_role , user_name) 
            VALUES ('${userEmailParameter}','${hashedPasswordParameter}','${phoneNumberparameter}','${userCountryParameter}','user','${userNameParameter}')
        `;
        yield (0, database_1.executeQuery)(registerUser, []);
    }),
};
