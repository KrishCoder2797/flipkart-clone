import express from 'express' ;

// Custom Imports 
import { userSignup } from '../controller/user_controller.js';

const router = express.Router();

router.post('/signup',userSignup)  // here userSignup is callback function written in another file to make code more readable

export default router ;