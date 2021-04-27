import {
    getUserWithID
} from '../controllers/userController';

import { Router } from 'express';
const router = new Router();

import { AuthService } from '../services/authService'
const authService = new AuthService()

router.route('/user/:userId')
    .get(authService.authenticateToken, getUserWithID);

export default router;