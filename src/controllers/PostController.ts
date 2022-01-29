import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../entity/Post";

export default class PostController {
    public async index(req: Request, res: Response): Promise<Response> {
        const postRepository = getRepository(Post);

        /*const posts = await postRepository
        .query("SELECT user.id, user.name, posts.title, posts.content FROM posts LEFT JOIN user ON user.id = posts.user");*/

        const posts = await postRepository
            .createQueryBuilder("posts")
            .leftJoinAndSelect("posts.user", "user.id")
            .getMany()

        return res.json(posts);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const { title, content, user } = req.body

        const postRepository = getRepository(Post);

        const post = await postRepository
        .createQueryBuilder()
        .insert()
        .into(Post)
        .values({
            title,
            content,
            user
        })
        .execute()

        return res.json(post);
        
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { title, content } = req.body;
        
        const postRepository = getRepository(Post);

        const post = await postRepository
        .createQueryBuilder()
        .update(Post)
        .set({ title, content })
        .where("id = :id", { id })
        .execute()

        return res.json(post);
        
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        
        await getRepository(Post)
        .createQueryBuilder()
        .delete()
        .from(Post)
        .where("id = :id", { id })
        .execute()

        return res.json([]);
        
    }
}