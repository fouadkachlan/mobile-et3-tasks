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
exports.connectDB = exports.executeQuery = exports.db = void 0;
const mysql_1 = require("mysql");
exports.db = ({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Student-Management-system',
});
const pool = (0, mysql_1.createPool)(exports.db);
const executeQuery = (query, params) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (err, rows) => {
            if (err) {
                console.log(`Error executing query: ${err}`);
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
        pool.getConnection((err, connection) => {
            if (err) {
                console.error('Unable to connect to the MySQL database:', err);
                throw err;
            }
            console.log("Connected to the MySQL database");
            connection.release();
        });
    }
    catch (error) {
        console.error('Unable to connect to the MySQL database:', error);
        throw error;
    }
});
exports.connectDB = connectDB;
