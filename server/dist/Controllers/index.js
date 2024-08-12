"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("./userController");
const userController_2 = require("./userController");
const userController_3 = require("./userController");
const newsController_1 = require("./newsController");
const rateLimiter_1 = require("../Middlewares/rateLimiter");
const router = (0, express_1.Router)();
router.post('/createUser', rateLimiter_1.defaultRateLimiter, userController_1.createUser); //gateKeeper(["user"] , "/createUser")
router.post('/createAdmin', rateLimiter_1.defaultRateLimiter, userController_1.createAdmin); //, gateKeeper(["user"],"/createAdmin")
router.post('/loginUser', rateLimiter_1.loginUserRateLimiter, userController_2.authenticateLoginAsUser); //gateKeeper(["user"] , "/loginUser"),
router.post('/getUserProfileData', rateLimiter_1.defaultRateLimiter, userController_3.userProfileData); //, gateKeeper(["user"] , "/getUserProfileData")
router.post('/addNews', rateLimiter_1.defaultRateLimiter, newsController_1.addNews); //,gateKeeper(["user"] , "/addNews")
router.post('/news', rateLimiter_1.defaultRateLimiter, newsController_1.getAllNews); //gateKeeper(["user"] , "/news"),
exports.default = router;
