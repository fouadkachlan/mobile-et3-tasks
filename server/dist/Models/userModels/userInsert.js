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
exports.userInsert = void 0;
const database_1 = require("../../utils/database");
exports.userInsert = {
    registerAsAdmin: (user_email, hashedPassword, user_phone_number, user_country, user_name) => __awaiter(void 0, void 0, void 0, function* () {
        const userEmailParameterEscaped = database_1.pool.escape(user_email);
        const hashedPasswordParameterEscaped = database_1.pool.escape(hashedPassword);
        const phoneNumberparameterEscaped = database_1.pool.escape(user_phone_number);
        const userCountryParameterEscaped = database_1.pool.escape(user_country);
        const userNameParameterEscaped = database_1.pool.escape(user_name);
        const registerUser = `
            INSERT INTO users 
            (user_email, user_password, user_phone_number, user_country , user_role , user_name)
            VALUES 
            (${userEmailParameterEscaped},${hashedPasswordParameterEscaped},${phoneNumberparameterEscaped},${userCountryParameterEscaped},'admin',${userNameParameterEscaped})
        `;
        yield (0, database_1.executeQuery)(registerUser, []);
    }),
    registerAsUser: (user_email, hashedPassword, user_phone_number, user_country, user_name) => __awaiter(void 0, void 0, void 0, function* () {
        const userEmailParameterEscaped = database_1.pool.escape(user_email);
        const hashedPasswordParameterEscaped = database_1.pool.escape(hashedPassword);
        const phoneNumberparameterEscaped = database_1.pool.escape(user_phone_number);
        const userCountryParameterEscaped = database_1.pool.escape(user_country);
        const userNameParameterEscaped = database_1.pool.escape(user_name);
        const registerUser = `
            INSERT INTO users (user_email, user_password, user_phone_number, user_country , user_role , user_name) 
            VALUES (${userEmailParameterEscaped},${hashedPasswordParameterEscaped},${phoneNumberparameterEscaped},${userCountryParameterEscaped},'user',${userNameParameterEscaped})
        `;
        console.log("Sign In query : ", registerUser);
        yield (0, database_1.executeQuery)(registerUser, []);
    }),
};
