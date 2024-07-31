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
exports.newsModel = void 0;
const database_1 = require("../utils/database");
exports.newsModel = {
    insertNews: (user_id, news_content) => __awaiter(void 0, void 0, void 0, function* () {
        const insertNewsQuery = 'INSERT INTO `news_reader_app`.`news`(`news_written_by`,`date_of_news`,`news_content`) VALUES (?,CURDATE(),?)';
        yield (0, database_1.executeQuery)(insertNewsQuery, [user_id, news_content]);
    }),
    fetchAllNewsData: () => __awaiter(void 0, void 0, void 0, function* () {
        const allNewsDataQuery = "SELECT user_name,date_of_news, news_content FROM `news_reader_app`.`news` n , `news_reader_app`.`users` u WHERE u.`user_id` = n.`news_written_by`";
        const result = yield (0, database_1.executeQuery)(allNewsDataQuery, []);
        return result;
    })
};
