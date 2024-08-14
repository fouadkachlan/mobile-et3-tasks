import { Router } from 'express';
import { createAdmin, createUser } from './userController';
import { authenticateLoginAsUser } from './userController';
import { userProfileData } from './userController';
import { addNews, getAllNews } from './newsController';
import { defaultRateLimiter, loginUserRateLimiter } from '../Middlewares/rateLimiter';
import gateKeeper from '../Middlewares/gatekeeper';


const router : Router = Router();
router.post('/createUser',gateKeeper(["user"] , "/createUser") ,defaultRateLimiter ,createUser );
router.post('/createAdmin',  gateKeeper(["user"],"/createAdmin") ,defaultRateLimiter ,createAdmin);
router.post('/loginUser', loginUserRateLimiter  ,authenticateLoginAsUser);
router.post('/getUserProfileData', gateKeeper(["user"] , "/getUserProfileData") , defaultRateLimiter  ,userProfileData); 
router.post('/addNews',gateKeeper(["user"] , "/addNews"), defaultRateLimiter,addNews);
router.post('/news',defaultRateLimiter, getAllNews );

export default router;

