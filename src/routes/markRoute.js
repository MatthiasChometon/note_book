import {
    addMark,
    deleteMark
} from '../controllers/markController'

import { Router } from 'express';
const router = new Router();

router.route('/user/:userId/mark')
.post(addMark)

router.route('/user/:userId/mark/:markId')
.delete(deleteMark)

export default router;