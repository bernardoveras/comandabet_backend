import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";

interface IAuthenticateUser {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUser) {
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    });

    if (!user) {
      throw new Error("Usuário e/ou senha inválidos.");
    }

    const passwordIsMatch = await compare(password, user.password);

    if (!passwordIsMatch) {
      throw new Error("Usuário e/ou senha inválidos.");
    }

    const secretKey = process.env.SECRET_KEY;

    if (!secretKey) {
      throw new Error("Ocorreu um erro inesperado. Entre em contato com o suporte!");
    }

    const token = sign(
      { email },
      secretKey,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return { token };
  }
}