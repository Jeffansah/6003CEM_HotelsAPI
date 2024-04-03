import Router from "koa-router";
import Stripe from "stripe";
import { verifyToken } from "../utils/verifyToken.js";

const router = new Router();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2023-10-16",
});

router.post("/payment", async (ctx) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "gbp",
            unit_amount: ctx.request.body.price * 100,
            product_data: {
              name: ctx.request.body.name,
            },
          },
          quantity: ctx.request.body.rooms,
        },
      ],
      metadata: {
        rooms: ctx.request.body.rooms,
        nights: ctx.request.body.nights,
      },
      mode: "payment",
      success_url: "http://localhost:3000/",
      cancel_url: "http://localhost:3000/",
    });
    console.log("session created");

    ctx.status = 200;
    ctx.body = { sessionUrl: session.url };
  } catch (error) {
    console.log(error);
  }
});

export default router;
