import { Router } from 'express';
import { changeProfileCountry, changeProfileEmail, changeProfileNumber, changeProfileUserName, createAdmin, createUser } from './userController';
import { authenticateLoginAsUser } from './userController';
import { userProfileData } from './userController';
import { addNews, getAllNews } from './newsController';
import { defaultRateLimiter, loginUserRateLimiter } from '../Middlewares/rateLimiter';
import gateKeeper from '../Middlewares/gatekeeper';


const router : Router = Router();
router.post('/createUser',defaultRateLimiter ,createUser );
router.post('/createAdmin',defaultRateLimiter ,createAdmin);
router.post('/loginUser', loginUserRateLimiter  ,authenticateLoginAsUser);
router.post('/getUserProfileData', gateKeeper(["user"] , "/getUserProfileData") , defaultRateLimiter  ,userProfileData); 
router.post('/addNews',gateKeeper(["user"] , "/addNews"), defaultRateLimiter,addNews);
router.post('/news',defaultRateLimiter, getAllNews );
router.post('/updateUserName' , changeProfileUserName);
router.post('/updateEmail' , changeProfileEmail);
router.post('/updateNumber' , changeProfileNumber);
router.post('/updateCountry' , changeProfileCountry);



export default router;

