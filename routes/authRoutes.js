import express from 'express';
const router = express.Router();

import rateLimiter from 'express-rate-limit';

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10,
    message: 
        'Too many requests, please try again after 15 minutes'
});

import authenticateUser from '../middleware/auth.js';
import { 
    registerUser, 
    loginUser, 
    updateUser 
} from '../controllers/authController.js';

router.route('/register').post(apiLimiter, registerUser);
router.route('/login').post(apiLimiter, loginUser);
router.route('/updateUser').patch(authenticateUser, updateUser);

export default router;