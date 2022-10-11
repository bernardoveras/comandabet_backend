import { Router } from "express";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";
import { AuthenticateUserController } from "./modules/account/useCases/authenticateUser/AuthenticateUserController";
import { CreateTipController } from "./modules/tips/useCases/createTip/CreateTipController";
import { GetAllTipsController } from "./modules/tips/useCases/getAllTips/GetAllTipsController";
import { GetTipsByUserIdController } from "./modules/tips/useCases/getTipsByUserId/GetTipsByUserIdController";
import { BetOnTipController } from "./modules/users/useCases/betOnTip/BetOnTipController";
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";

const routes = Router();

const authenticateUserController = new AuthenticateUserController();

const createUserController = new CreateUserController();
const betOnTipController = new BetOnTipController();

const createTipController = new CreateTipController();
const getAllTipsController = new GetAllTipsController();
const getTipsByUserIdController = new GetTipsByUserIdController();


routes.post("/auth/", authenticateUserController.handle);

routes.post("/users/", createUserController.handle);
routes.post("/users/bet/:tip_id", betOnTipController.handle);

routes.post("/tips/", ensureAuthenticateUser, createTipController.handle);
routes.get("/tips/", ensureAuthenticateUser, getAllTipsController.handle);
routes.get("/tips/user/:user_id", ensureAuthenticateUser, getTipsByUserIdController.handle);

export { routes };