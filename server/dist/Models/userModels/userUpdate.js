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
exports.userUpdateModels = void 0;
const database_1 = require("../../utils/database");
exports.userUpdateModels = {
    userUpdateUsernameModels: (user_name, user_id) => __awaiter(void 0, void 0, void 0, function* () {
        const escapedUserName = database_1.pool.escape(user_name);
        const updateQuery = `
            UPDATE news_reader_app.users SET user_name = ${escapedUserName} WHERE user_id= ${user_id};

        `;
        yield (0, database_1.executeQuery)(updateQuery, []);
    }),
    userUpdateEmailModels: (user_email, user_id) => __awaiter(void 0, void 0, void 0, function* () {
        const escapedUserEmail = database_1.pool.escape(user_email);
        const updateQuery = `
            UPDATE news_reader_app.users SET user_email = ${escapedUserEmail} WHERE user_id= ${user_id};

        `;
        yield (0, database_1.executeQuery)(updateQuery, []);
    }),
    userUpdateNumberModels: (user_phone_number, user_id) => __awaiter(void 0, void 0, void 0, function* () {
        const escapedUserNumber = database_1.pool.escape(user_phone_number);
        const updateQuery = `
            UPDATE news_reader_app.users SET user_phone_number = ${escapedUserNumber} WHERE user_id= ${user_id};

        `;
        yield (0, database_1.executeQuery)(updateQuery, []);
    }),
    userUpdateCountryModels: (user_country, user_id) => __awaiter(void 0, void 0, void 0, function* () {
        const escapedUserCountry = database_1.pool.escape(user_country);
        const updateQuery = `
            UPDATE news_reader_app.users SET user_country = ${escapedUserCountry} WHERE user_id= ${user_id};

        `;
        yield (0, database_1.executeQuery)(updateQuery, []);
    })
};
