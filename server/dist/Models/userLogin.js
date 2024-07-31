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
exports.getUserByEmail = void 0;
const database_1 = require("../utils/database");
exports.getUserByEmail = {
    Login: (email_Address) => __awaiter(void 0, void 0, void 0, function* () {
        const userLoginQuery = "SELECT * FROM `News_Reader_App`.`Sign_Up_New_Users` WHERE email_Address=?";
        const result = yield (0, database_1.executeQuery)(userLoginQuery, [email_Address]);
        // console.log(result);
        if (result.length === 0) {
            return null;
        }
        return {
            email_Address: result[0].email_Address,
            Password: result[0].Password
        };
    })
};
