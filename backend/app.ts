import dotenv from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import { router as companyRoutes } from "./routes/companies";

dotenv.config();

const app = express();

mongoose
   .connect(process.env.DATABASE as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
   })
   .then(() => {
      console.log("DB CONNECTED");
   })
   .catch((err) => {
      console.log("DB CONNECTION ERROR", err);
   });

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
   return res.send("Welcome!");
});
app.use("/api", companyRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
   console.log(`App is running on port ${port}`);
});
