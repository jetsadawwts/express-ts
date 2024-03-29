import type { Request, Response } from 'express';
import express from 'express';
import { userRouters } from './modules/user';

const router = express.Router();

router.use('/users', userRouters);

router.use('/', (req: Request, res: Response) => {
  res.json({ message: 'Home' });
});

export default router;
