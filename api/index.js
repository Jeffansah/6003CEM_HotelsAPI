import Koa from "koa";
import dotenv from "dotenv";
import { connectToDatabase } from "./mongo/index.js";

// Load environment variables
dotenv.config();
const port = process.env.PORT || 3000;

// Creating new Koa instance
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "Test App";
});

// Database connection and server start
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`listening on port: ${port}`);
  });
});
