import stripe from 'stripe';
import 'dotenv/config';

export const Stripe = new stripe(process.env.STRIPE_SECRET as string, {
  apiVersion: '2020-08-27',
  typescript: true,
});
