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
exports.userSelect = void 0;
const database_1 = require("../../utils/database");
exports.userSelect = {
    LoginAsUser: (user_email) => __awaiter(void 0, void 0, void 0, function* () {
        const userEmailParameter = user_email;
        const userLoginQuery = `
            SELECT * FROM users
            WHERE user_email=
        ` + database_1.pool.escape(userEmailParameter);
        const result = yield (0, database_1.executeQuery)(userLoginQuery, []);
        if (result.length === 0) {
            return null;
        }
        return {
            user_email: result[0].user_email,
            user_password: result[0].user_password,
            user_id: result[0].user_id
        };
    }),
    LoginAsAdmin: (user_email) => __awaiter(void 0, void 0, void 0, function* () {
        const userEmailParameter = user_email;
        const userLoginQuery = `
            SELECT *
            FROM users
            WHERE user_email=
        ` + database_1.pool.escape(userEmailParameter);
        const result = yield (0, database_1.executeQuery)(userLoginQuery, []);
        if (result.length === 0) {
            return null;
        }
        return {
            user_email: result[0].user_email,
            user_password: result[0].user_password,
            user_id: result[0].user_id
        };
    }),
    fetchProfile: (user_email) => __awaiter(void 0, void 0, void 0, function* () {
        const userEmailParameter = user_email;
        const userLoginQuery = `
            SELECT *
            FROM users
            WHERE user_email=
        ` + database_1.pool.escape(userEmailParameter);
        const result = yield (0, database_1.executeQuery)(userLoginQuery, []);
        console.log(userLoginQuery, result);
        if (result.length === 0) {
            return null;
        }
        return {
            user_email: result[0].user_email,
            user_id: result[0].user_id,
            user_name: result[0].user_name,
            user_phone_number: result[0].user_phone_number,
            user_country: result[0].user_country
        };
    })
};
