import { Request, Response } from "express";
import { BetOnTipUseCase } from "./BetOnTipUseCase";

export class BetOnTipController {
  async handle(request: Request, response: Response) {
    const tip_id = request.params.tip_id;

    const betOnTipUseCase = new BetOnTipUseCase();

    const result = await betOnTipUseCase.execute({
      user_id: request.user_id,
      tip_id,
    });

    return response.json(result);
  }
}