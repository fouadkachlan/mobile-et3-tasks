"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = require("./utils/database");
const index_1 = __importDefault(require("./Controllers/index"));
const Message_1 = require("./Constant/Message");
const cors = require('cors');
const app = (0, express_1.default)();
const PORT = 3001;
app.use(cors());
app.use(body_parser_1.default.json());
app.use('/api', index_1.default);
(0, database_1.connectDB)().then(() => {
    app.listen(PORT, () => {
        console.log(`${Message_1.ServerStatus.Success.serverListening}:${PORT}`);
    });
}).catch((error) => {
    console.error(Message_1.DatabaseStatus.Fail.databaseConnectionError);
});
