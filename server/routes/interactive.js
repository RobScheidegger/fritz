import express from 'express';

import { getSession } from '../controllers/interactive.js';

const router = express.Router();

router.get('/:sessionId', getSession);

export default router;