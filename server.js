import express, {json} from "express";
import cors from "cors";

import dotenv from "dotenv";
import authRouter from "../app/routes/authRouter.js";

const app = express();
app.use(json());
app.use(cors());

dotenv.config();

// routes
app.use(authRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);

});