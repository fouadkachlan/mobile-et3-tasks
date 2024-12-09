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
const Message_1 = require("../Constant/Message");
const newsInsert_1 = require("../Models/newsModels/newsInsert");
const newsSelect_1 = require("../Models/newsModels/newsSelect");
const newsLibrary = {
    addNewsForUser: (user_id, news_content) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield newsInsert_1.newsInsert.insertNews(user_id, news_content);
        }
        catch (error) {
            throw new Error(Message_1.NewsMessages.Fail.errorNewsAddMessage);
        }
    }),
    fetchingAllNews: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield newsSelect_1.newsSelect.fetchAllNewsData();
        }
        catch (error) {
            throw new Error(Message_1.NewsMessages.Fail.errorNewsFetchMessage);
        }
    })
};
exports.default = newsLibrary;
