import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Verify Access Token
export const verifyToken = async (ctx, next) => {
  const token = ctx.cookies.get("access_token");
  if (!token) {
    ctx.throw(401, "You are unauthorized to perform this operation");
  } else {
    try {
      const user = jwt.verify(token, process.env.JWT_KEY);
      ctx.state.user = user;
      await next();
    } catch (error) {
      ctx.throw(403, "Token not valid");
    }
  }
};

// Verify User Status
export const verifyUser = async (ctx, next) => {
  await verifyToken(ctx, async () => {
    if (ctx.state.user.id === ctx.params.id || ctx.state.user.isAdmin) {
      await next();
    } else {
      ctx.throw(403, "You are unauthorized to perform this operation");
    }
  });
};

// Verify Admin Statuss
export const verifyAdmin = async (ctx, next) => {
  await verifyToken(ctx, async () => {
    if (ctx.state.user.isAdmin) {
      await next();
    } else {
      ctx.throw(403, "You are unauthorized to perform this operation");
    }
  });
};