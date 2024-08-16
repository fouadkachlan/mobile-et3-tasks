"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("./userController");
const userController_2 = require("./userController");
const userController_3 = require("./userController");
const newsController_1 = require("./newsController");
const rateLimiter_1 = require("../Middlewares/rateLimiter");
const gatekeeper_1 = __importDefault(require("../Middlewares/gatekeeper"));
const router = (0, express_1.Router)();
router.post('/createUser', rateLimiter_1.defaultRateLimiter, userController_1.createUser);
router.post('/createAdmin', rateLimiter_1.defaultRateLimiter, userController_1.createAdmin);
router.post('/loginUser', rateLimiter_1.loginUserRateLimiter, userController_2.authenticateLoginAsUser);
router.post('/getUserProfileData', (0, gatekeeper_1.default)(["user"], "/getUserProfileData"), rateLimiter_1.defaultRateLimiter, userController_3.userProfileData);
router.post('/addNews', (0, gatekeeper_1.default)(["user"], "/addNews"), rateLimiter_1.defaultRateLimiter, newsController_1.addNews);
router.post('/news', rateLimiter_1.defaultRateLimiter, newsController_1.getAllNews);
router.post('/updateUserName', userController_1.changeProfileUserName);
router.post('/updateEmail', userController_1.changeProfileEmail);
router.post('/updateNumber', userController_1.changeProfileNumber);
router.post('/updateCountry', userController_1.changeProfileCountry);
exports.default = router;
