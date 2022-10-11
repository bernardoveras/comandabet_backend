import { Request, Response } from "express";
import { CreateTipUseCase } from "./CreateTipUseCase";

export class CreateTipController {
  async handle(request: Request, response: Response) {
    const {
      tenant_id,
      suggested_odd,
      details,
      match,
      market_id,
      time,
      url,
      image_url
    } = request.body;

    const createTipUseCase = new CreateTipUseCase();

    const result = await createTipUseCase.execute({
      tenant_id,
      suggested_odd,
      details,
      match,
      market_id,
      time,
      url,
      image_url
    });

    return response.json(result);
  }
}