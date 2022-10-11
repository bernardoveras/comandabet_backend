import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateClient {
  name: string;
  email: string;
  password: string;
  tenant_id: string | null;
}

export class CreateUserUseCase {

  async execute({ name, email, password, tenant_id }: ICreateClient) {
    const userExists = await prisma.user.findFirst({
      where: {
        email: { mode: "insensitive", equals: email },
      },
    });

    console.log(userExists);

    if (userExists) {
      throw new Error("Este e-mail já está em uso. Tente outro.");
    }

    const hashPassword = await hash(password, 10);

    const createdUser = await prisma.user.create({
      data: {
        email,
        password: hashPassword,
        name,
        tenant_id,
      },
    });

    return createdUser;
  }
}