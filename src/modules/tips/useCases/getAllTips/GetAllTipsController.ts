import { Request, Response } from "express";
import { GetAllTipsUseCase } from "./GetAllTipsUseCase";

export class GetAllTipsController {
  async handle(request: Request, response: Response) {
    const getAllTipsUseCase = new GetAllTipsUseCase();

    const result = await getAllTipsUseCase.execute();

    return response.json(result);
  }
}