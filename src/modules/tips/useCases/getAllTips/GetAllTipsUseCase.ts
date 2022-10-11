import { prisma } from "../../../../database/prismaClient";

export class GetAllTipsUseCase {
  async execute() {
    const tips = await prisma.tip.findMany({
      select: {
        id: true,
        details: true,
        image_url: true,
        market_id: true,
        match: true,
        result: true,
        suggested_odd: true,
        time: true,
        url: true,
        created_at:true,
      }
    });

    return tips;
  }
}