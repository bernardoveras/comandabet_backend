import { prisma } from "../../../../database/prismaClient";

interface IGetTipsByUserId {
  user_id: string;
}

export class GetTipsByUserIdUseCase {
  async execute({ user_id }: IGetTipsByUserId) {
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
        created_at: true,
      },
      where: {
        betting_users: {
          some: {
            user_id
          }
        }
      }
    });

    return tips;
  }
}