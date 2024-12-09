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
const Message_1 = require("../Constant/Message");
const addNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id, news_content } = req.body;
        yield newsLibrary_1.default.addNewsForUser(user_id, news_content);
        res.status(200).json({ message: Message_1.NewsMessages.Success.successNewsAddMessage });
    }
    catch (error) {
        res.status(500).json({ error: Message_1.NewsMessages.Fail.errorNewsAddMessage });
    }
});
exports.addNews = addNews;
const getAllNews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newData = yield newsLibrary_1.default.fetchingAllNews();
        res.status(200).json(newData);
    }
    catch (error) {
        res.status(500).json({ error: Message_1.ServerStatus.Error.internalServerError });
    }
});
exports.getAllNews = getAllNews;
