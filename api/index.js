import Koa from "koa";
import dotenv from "dotenv";
import { connectToDatabase } from "./mongo/index.js";
import Router from "koa-router";
import authRoute from "./routes/authRoute.js";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";

// Load environment variables
dotenv.config();
const port = process.env.PORT || 3000;

// Creating new Koa instance
const app = new Koa();

// initializing router
const router = new Router();

// Middlewares
app.use(cors());
app.use(bodyParser());

// Registering routes
router.use("/api/auth", authRoute.routes());

app.use(router.routes()).use(router.allowedMethods());

// Database connection and server start
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`listening on port: ${port}`);
  });
});
