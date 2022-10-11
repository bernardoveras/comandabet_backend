import { Router } from "express";
import { AuthenticateUserController } from "./modules/account/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./modules/users/useCases/createUser/CreateUserController";

const routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

routes.post("/auth/", authenticateUserController.handle);
routes.post("/users/", createUserController.handle);

export { routes };