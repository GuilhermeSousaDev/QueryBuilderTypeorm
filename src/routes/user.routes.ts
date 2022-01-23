import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRouter = Router();

userRouter.get('/', new UserController().index);
userRouter.post('/', new UserController().create);
userRouter.put('/', new UserController().update);
userRouter.delete('/', new UserController().delete);

export default userRouter;
