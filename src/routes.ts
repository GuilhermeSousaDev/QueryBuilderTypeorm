import { Router } from 'express';
import postRouter from './routes/post.routes';
import userRouter from './routes/user.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/post', postRouter);

export default router;
