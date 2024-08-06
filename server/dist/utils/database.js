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
exports.connectDB = exports.executeQuery = exports.pool = exports.db = void 0;
const mysql_1 = require("mysql");
const Message_1 = require("../Constant/Message");
exports.db = ({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'news_reader_app',
});
exports.pool = (0, mysql_1.createPool)(exports.db);
const executeQuery = (query, params) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        exports.pool.query(query, params, (err, rows) => {
            if (err) {
                console.log(Message_1.DatabaseStatus.Fail.queryExecutionError);
                reject(err);
            }
            else {
                resolve(rows);
            }
        });
    });
});
exports.executeQuery = executeQuery;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        exports.pool.getConnection((err, connection) => {
            if (err) {
                console.error(Message_1.DatabaseStatus.Fail.databaseConnectionError);
                throw err;
            }
            console.log(Message_1.DatabaseStatus.Success.databaseConnectionSuccess);
            connection.release();
        });
    }
    catch (error) {
        console.error(Message_1.DatabaseStatus.Fail.databaseConnectionError);
        throw error;
    }
});
exports.connectDB = connectDB;
