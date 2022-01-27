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
    <img src="uploads/copo.png" ></img>'
`))

export default uploadPostRouter;
