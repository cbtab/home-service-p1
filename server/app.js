import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import authRouter from "./apps/auth.js";

const init = async () => {
  const app = express();
  const port = 3000;
  app.use(cors());
  app.use(bodyParser.json());

  app.use("/auth", authRouter);

  app.get("/", (req, res) => {
    res.send("server is running");
  });

  app.get("*", (req, res) => {
    res.status(404).send("Not Found");
  });

  app.listen(port, () => {
    console.log("service is running on port ", 3000);
  });
};

init();
