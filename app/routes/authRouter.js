import {Router} from "express";

import { login, register, logout } from "../controllers/authController.js";
import {validateSignIn, validateSignUp} from "../middlewares/validateAuthMiddleware.js";

const authRouter = Router();

authRouter.post("/signup", validateSignUp, register);
authRouter.post("/signin", validateSignIn, login);
authRouter.get("/signout", logout);

export default authRouter;