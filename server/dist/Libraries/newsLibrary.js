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
const newsModel_1 = require("../Models/newsModel");
const newsLibrary = {
    addNewsForUser: (user_id, news_content) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield newsModel_1.newsModel.insertNews(user_id, news_content);
            console.log('News added successfully.');
        }
        catch (error) {
            console.error('Error while adding news to the news library:', error);
            throw new Error('Failed to add news. Please try again later.');
        }
    }),
    fetchingAllNews: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield newsModel_1.newsModel.fetchAllNewsData();
        }
        catch (error) {
            throw new Error("Failed to fetch news");
        }
    })
};
exports.default = newsLibrary;
