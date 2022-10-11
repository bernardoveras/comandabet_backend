import { prisma } from "../../../../database/prismaClient";

interface IBetOnTip {
  tip_id: string;
  user_id: string;
}

export class BetOnTipUseCase {
  async execute({ user_id, tip_id }: IBetOnTip) {

    const tipExists = await prisma.tip.findFirst({
      where: { id: tip_id },
    });

    if (!tipExists) {
      throw new Error("Palpite não encontrado.");
    }

    const result = await prisma.userBets.create({
      data: {
        tip_id,
        user_id,
      },
    });

    console.log(result)

    return result;
  }
}