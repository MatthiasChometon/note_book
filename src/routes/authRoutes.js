import { Router } from 'express';
const router = new Router();

import {
    login, 
    register,
    logout
} from '../controllers/authController'

router
    .post('/login', login)
    .post('/register', register);

export default router;