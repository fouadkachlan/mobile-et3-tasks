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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNews = exports.addNews = void 0;
const newsLibrary_1 = __importDefault(require("../Libraries/newsLibrary"));
const addNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id, news_content } = req.body;
        console.log("Request Body:", user_id, news_content);
        yield newsLibrary_1.default.addNewsForUser(user_id, news_content);
        console.log("News added successfully");
        res.status(200).json({ message: "News added successfully" });
    }
    catch (error) {
        console.error("Error adding news:", error);
        res.status(500).json({ message: 'Error Has occurred when adding news', error });
    }
});
exports.addNews = addNews;
const getAllNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newData = yield newsLibrary_1.default.fetchingAllNews();
        res.status(200).json(newData);
    }
    catch (error) {
        console.error("Error while fetching News!", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getAllNews = getAllNews;
