import express from 'express';
import stripe from 'stripe';
import cors from 'cors';

const server = express();

server.use(express.json());

server.use(express.urlencoded({ extended: true }));

server.use(cors());

const Stripe = new stripe(
  'sk_test_51KMJgWDs0RH8yZRdcSLht5LYqpTmzHK424Ej2uTt8p4Gdr24u0rS7rIUrftTkgLyqHZbgZ5luGmVM2tPqUqIZ9ph00qAEbepDQ',
  {
    apiVersion: '2020-08-27',
    typescript: true,
  }
);

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
