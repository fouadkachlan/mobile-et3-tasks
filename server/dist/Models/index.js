"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModels = void 0;
const userInsert_1 = require("./userModels/userInsert");
const userUpdate_1 = require("./userModels/userUpdate");
const userSelect_1 = require("./userModels/userSelect");
exports.userModels = {
    insert: userInsert_1.userInsert,
    update: userUpdate_1.userUpdateModels,
    select: userSelect_1.userSelect
};
