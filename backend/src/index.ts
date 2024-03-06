import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Your app is up and running! 🚀");
});

app.listen(port, () => {
  console.log(
    `[server]: Server is Ready ✅ and running at http://localhost:${port}`,
  );
});
