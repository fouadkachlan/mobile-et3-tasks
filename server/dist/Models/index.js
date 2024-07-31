"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModels = void 0;
const userInsert_1 = require("./userInsert");
const userUpdate_1 = require("./userUpdate");
const userSelect_1 = require("./userSelect");
exports.userModels = {
    insert: userInsert_1.userSignUp,
    update: userUpdate_1.userUpdateModels,
    select: userSelect_1.getUserModel
};
