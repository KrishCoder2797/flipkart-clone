import express from 'express' ;

// Custom Imports 
import { userSignup,userLogin } from '../controller/user_controller.js';

const router = express.Router();

router.post('/signup',userSignup)  // here userSignup is callback function written in another file to make code more readable
router.post('/login',userLogin);
export default router ;