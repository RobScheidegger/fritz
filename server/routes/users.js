import express from 'express';

import { getUser, signIn } from '../controllers/users.js';

const router = express.Router();

router.get('/:userId', getUser);
router.post('/signin', signIn);

export default router;