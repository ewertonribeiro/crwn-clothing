import './style.scss';
import CheckoutItem from '../../Components/CheckoutItem';

import { useSelector } from 'react-redux';

import StripeButton from '../../Components/Buttons/StripeButton';

import { UseTotal } from '../../Hooks/useTotal';

export default function CheckoutPage(){

const CartItems = useSelector(store=>store.cart.cartItems);

const total = UseTotal();

return(
<div className="checkout-page" >

    <div className="checkout-header">
            <div  className="header-block">
                <span>Product</span>
            </div>

            <div  className="header-block">
                <span>Name</span>
            </div>

            <div  className="header-block">
                <span>Quantity</span>
            </div>

            <div  className="header-block">
                <span>Price</span>
            </div>

            <div className="header-block">
                <span>Remove</span>
            </div>
    </div>

    {
        CartItems.map(cartItem=>(

        <CheckoutItem key={cartItem.id} {...cartItem} />

        ))
    }



    <div className="total" >

        <h3 >TOTAL ${total}</h3>
    </div>

    <StripeButton/>





</div>
)
}
