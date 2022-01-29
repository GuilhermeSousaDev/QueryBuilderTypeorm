import { hash } from "bcryptjs";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export default class UserController {
    public async index(req: Request, res: Response): Promise<Response> {
        const userRepository = getRepository(User);

        const users = await userRepository
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.posts", "posts.id")
        .getMany()

        return res.json(users);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body
        
        const passwordHash = await hash(password, 8);

        const userRepository = getRepository(User);

        const user = await userRepository
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
            name,
            email,
            password: passwordHash,
        })
        .execute()

        return res.json(user);
        
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { name, email } = req.body;
        
        const userRepository = getRepository(User);

        const user = await userRepository
        .createQueryBuilder()
        .update(User)
        .set({ name, email })
        .where("id = :id", { id })
        .execute()

        return res.json(user);
        
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        
        await getRepository(User)
        .createQueryBuilder()
        .delete()
        .from(User)
        .where("id = :id", { id })
        .execute()

        return res.json([]);
        
    }
}