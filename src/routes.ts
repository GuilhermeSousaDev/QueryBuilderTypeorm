import { Router } from 'express';
import postRouter from './routes/post.routes';
import uploadPostRouter from './routes/upload_post.routes';
import userRouter from './routes/user.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/post', postRouter);
router.use('/upload', uploadPostRouter);

export default router;
