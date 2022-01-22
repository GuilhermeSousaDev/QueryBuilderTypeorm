import { Router } from 'express';
import UserController from './controllers/UserController';

const router = Router();

router.get('/user', new UserController().index);
router.post('/user', new UserController().create);
router.put('/user', new UserController().update);
router.delete('/user', new UserController().delete);

export default router;
