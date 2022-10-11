import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateUser(request: Request, response: Response, next: NextFunction) {
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader) {
    throw response.status(401).json({
      message: "Token inválido.",
    });
  }

  const [, token] = authorizationHeader.split(" ");


  const secretKey = process.env.SECRET_KEY;

  if (!secretKey) {
    throw response.status(500).json({
      message: "Ocorreu um erro inesperado. Entre em contato com o suporte!",
    });
  }

  try {
    const { sub } = verify(token, secretKey) as IPayload;

    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).json({
      message: "Token inválido.",
    });
  }
}