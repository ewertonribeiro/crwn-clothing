import CartItem from '../CartItem';

import { handleShowCart } from '../../Redux/Reducers/Cart/cart-reducer';
import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { CartItens, CartContainer, Text } from './style';
import CustomButton from '../Buttons/CustomButton';

export function Cart() {
  const CartItems = useSelector((store) => store.cart.cartItems);
  const show = useSelector((store) => store.cart.show);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function GoToCheckout() {
    navigate('/checkout');

    dispatch(handleShowCart());
  }

  return (
    <CartContainer show={show}>
      <CartItens className='cart-items'>
        {CartItems.length > 0 ? (
          CartItems.map((item) => <CartItem key={item.id} {...item} />)
        ) : (
          <Text className='cart-empty'>Your Cart is Empty!</Text>
        )}
      </CartItens>

      <CustomButton
        cart={true}
        text='GO TO CHECKOUT'
        type='button'
        Click={GoToCheckout}
      />
    </CartContainer>
  );
}
