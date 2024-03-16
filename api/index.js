import Koa from "koa";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3000;

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "Test App";
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
