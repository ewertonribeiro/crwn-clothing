import express from 'express';
import cors from 'cors';
import { Stripe } from './stripe/stripe';

const server = express();

server.use(express.json());

server.use(express.urlencoded({ extended: true }));

server.use(cors());

const port = 5000;

server.post('/', async (req, res) => {
  const { amount } = req.body;

  if (amount <= 1) {
    return res.json({ error: 'The amount must be grater tan 1' });
  }
  const paymentIntent = await Stripe.paymentIntents.create({
    amount: amount,
    currency: 'brl',
    payment_method_types: ['card'],
  });

  return res.json(paymentIntent);
});

server.listen(port, () => console.log(`Server is running on port : ${port}`));
