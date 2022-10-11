import { prisma } from "../../../../database/prismaClient";

interface ICreateTip {
  tenant_id: string;
  suggested_odd: number | null;
  details: string | null;
  match: string;
  market_id: string;
  time: string | null;
  url: string;
  image_url: string | null;
}

export class CreateTipUseCase {
  async execute({
    tenant_id,
    suggested_odd,
    details,
    match,
    market_id,
    time,
    url,
    image_url
  }: ICreateTip) {
    const market = await prisma.market.findFirst({
      where: { id: market_id }
    });

    if (!market) {
      throw new Error("O mercado informado não existe.");
    }

    const tenant = await prisma.tenant.findFirst({
      where: { id: tenant_id }
    });

    if (!tenant) {
      throw new Error("O tenant informado não existe.");
    }

    if (suggested_odd && suggested_odd < 0) {
      throw new Error("A odd sugerida deve ser maior que zero.");
    }

    const createdTip = await prisma.tip.create({
      data: {
        match,
        url,
        details,
        image_url,
        market_id,
        suggested_odd,
        tenant_id,
        time,
      },
    });

    return createdTip;
  }
}