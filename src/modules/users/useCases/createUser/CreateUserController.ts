import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, tenant_id } = request.body;

    const createUserUseCase = new CreateUserUseCase();
    
    const result = await createUserUseCase.execute({
      name, email, password, tenant_id
    });

    return response.json(result);
  }
}