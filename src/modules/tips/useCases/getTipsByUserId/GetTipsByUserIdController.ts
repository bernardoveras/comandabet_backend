import { Request, Response } from "express";
import { GetTipsByUserIdUseCase } from "./GetTipsByUserIdUseCase";

export class GetTipsByUserIdController {
  async handle(request: Request, response: Response) {
    const getTipsByUserIdUseCase = new GetTipsByUserIdUseCase();

    const result = await getTipsByUserIdUseCase.execute({ user_id: request.user_id });

    return response.json(result);
  }
}