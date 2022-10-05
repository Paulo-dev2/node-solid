import { Request,Response } from "express";
import { createUserController } from "../useCases/CreateUser";

export class UserRouter{
    async add(req: Request, res: Response): Promise<Response>{
        return createUserController.handle(req, res);
    }
}