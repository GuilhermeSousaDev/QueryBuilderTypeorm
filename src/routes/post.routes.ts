import { Request, Response, Router } from 'express';
import PostController from '../controllers/PostController';

const postRouter = Router();

postRouter.get('/', new PostController().index);
postRouter.post('/', new PostController().create);
postRouter.put('/', new PostController().update);
postRouter.delete('/:id', new PostController().delete);

export default postRouter;
