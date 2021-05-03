import {
    addMark,
    deleteMark,
    updateMark,
    getAllMarks
} from '../controllers/markController'

import { Router } from 'express';
const router = new Router();

import { AuthService } from '../services/authService'
const authService = new AuthService()

router.route('/user/:userId/marks')
.post(authService.authenticateToken, addMark)
.get(authService.authenticateToken, getAllMarks)

router.route('/mark/:markId')
.delete(authService.authenticateToken, deleteMark)
.put(authService.authenticateToken, updateMark)

export default router;