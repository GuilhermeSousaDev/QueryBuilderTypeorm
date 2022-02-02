import multer from 'multer';
import UploadImagePostController from '../controllers/UploadImagePostController';
import { Request, Response, Router } from 'express';

const uploadPostRouter = Router();
const multerConfig = multer();

uploadPostRouter.post(
    '/:id', 
    multerConfig.single("file"), 
    new UploadImagePostController().update,
);

uploadPostRouter.get('/img/:id', (req: Request, res: Response) => res.send(`
    <form 
        action="http://localhost:8081/upload/${req.params.id}" 
        enctype="multipart/form-data"
        method="post">
        <input type="file" name="file">
        <input type="submit">
    </form>
    <img src="http://localhost:8081/files/467c145b3eeb84f8-copo.png"></img>'
    <img 
        src="http://localhost:8081/files/45e6517f57f3c071-WhatsApp Image 2022-01-13 at 17.56.19.jpeg">
    </img>'
`))

export default uploadPostRouter;
