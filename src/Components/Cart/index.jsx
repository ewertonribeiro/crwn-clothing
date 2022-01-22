import Button from '../Buttons/Login';
import CartItem from '../CartItem';

import { useSelector } from 'react-redux';

import './style.scss';


export function Cart({ show }){

const CartItems = useSelector(store=>store.cart.cartItems);


return (

<div className={`${!show ? "hide" : ""} cart`}>

    <div className="cart-items">

        {
            CartItems.map(item=>(

            <CartItem  key={item.name} {...item} />
            ))


        }

    </div>

    <Button text="GO TO CHECKOUT"/>

</div>

);
}
