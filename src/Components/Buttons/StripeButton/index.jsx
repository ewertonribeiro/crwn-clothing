import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleShow } from '../../../Redux/Reducers/Stripe/stripe-reducer';
import { UseTotal } from '../../../Hooks/useTotal';

import axios from 'axios';

import FormStripe from '../../StripeComponent/Form';

import { StripeBtn, StripeContainer } from './style.js';

export default function StripeButton() {
  const CartItems = useSelector((store) => store.cart.cartItems);
  const Total = UseTotal();

  const dispatch = useDispatch();

  const [options, setOptions] = useState(null);

  async function handleClick() {
    if (CartItems.length <= 0) {
      alert('Your cart is empty');
      return;
    }

    const { data } = await axios.post(
      'https://crwn-clothing-backend-2.herokuapp.com',
      {
        amount: Total * 100,
      }
    );

    setOptions({
      clientSecret: data.client_secret,
    });

    dispatch(handleShow());
  }

  return (
    <StripeContainer>
      {CartItems.length <= 0 || !options ? (
        <div></div>
      ) : (
        <FormStripe options={options} />
      )}

      <StripeBtn onClick={handleClick}>Pay Now</StripeBtn>
    </StripeContainer>
  );
}
