import { Router } from 'express';
import { authenticateLoginAsAdmin, createAdmin, createUser } from './userController';
import { authenticateLoginAsUser } from './userController';
import { userProfileData } from './userController';
import { addNews, getAllNews } from './newsController';
import { userSignUpRateLimiter } from '../Middlewares/rateLimiter';
import { defaultRateLimiter } from '../Middlewares/rateLimiter';
import gateKeeper from '../Middlewares/gatekeeper';


const router = Router();

router.post('/createUser', userSignUpRateLimiter  , createUser );
router.post('/createAdmin' , userSignUpRateLimiter ,  createAdmin)
router.post('/loginUser'    , authenticateLoginAsUser);
router.post('/getUserProfileData'  , userProfileData); 
router.post('/addNews', defaultRateLimiter , addNews);
router.post('/news' , defaultRateLimiter , getAllNews );

export default router;