import fs from 'fs';
import crypto from 'crypto';
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../entity/Post";

export default class UploadImagePostController {
    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const postRepository = getRepository(Post);

        const hash = crypto.randomBytes(8).toString('hex');

        const image = `${hash}-${req.file.originalname}`;
        const buffer = req.file.buffer;

        fs.writeFileSync(`uploads/${image}`, buffer);

        const post = await postRepository
        .createQueryBuilder()
        .update()
        .set({ image })
        .where("id = :id", { id })
        .execute()

        return res.json(post);
        
    }
}