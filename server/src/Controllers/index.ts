import { Router } from 'express';
import { authenticateLoginAsAdmin, createAdmin, createUser } from './userController';
import { authenticateLoginAsUser } from './userController';
import { userProfileData } from './userController';
import { addNews, getAllNews } from './newsController';
import { defaultRateLimiter, loginUserRateLimiter } from '../Middlewares/rateLimiter';
import gateKeeper from '../Middlewares/gatekeeper';


const router = Router();
router.post('/createUser', defaultRateLimiter ,createUser );//gateKeeper(["user"] , "/createUser")
router.post('/createAdmin' , defaultRateLimiter ,createAdmin)//, gateKeeper(["user"],"/createAdmin")
router.post('/loginUser', loginUserRateLimiter  ,authenticateLoginAsUser);//gateKeeper(["user"] , "/loginUser"),
router.post('/getUserProfileData' , defaultRateLimiter  ,userProfileData); //, gateKeeper(["user"] , "/getUserProfileData")
router.post('/addNews' , defaultRateLimiter,addNews);//,gateKeeper(["user"] , "/addNews")
router.post('/news',defaultRateLimiter, getAllNews );//gateKeeper(["user"] , "/news"),

export default router;

