import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, tenant_id } = request.body;

    const authenticateUserUseCase = new AuthenticateUserUseCase();

    const result = await authenticateUserUseCase.execute({
      email, password,
    });

    return response.json(result);
  }
}