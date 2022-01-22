import CustomButton from '../Buttons/CustomButton';
import CartItem from '../CartItem';

import { handleShowCart } from '../../Redux/Reducers/Cart/cart-reducer';
import { useSelector , useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';


import './style.scss';


export function Cart(){


const CartItems = useSelector(store=>store.cart.cartItems);
const show = useSelector(store=>store.cart.show);
const dispatch = useDispatch();


const navigate = useNavigate();


function GoToCheckout(){

navigate("/checkout");

dispatch(handleShowCart());

}


return (

<div className={`${!show ? "hide" : ""} cart`}>

    <div className="cart-items">

        {
            CartItems.length >0
            ?
            CartItems.map(item=>(

            <CartItem  key={item.id} {...item} />
            ))
            :
            <span className="cart-empty" >Your Cart is Empty!</span>
        }

    </div>

    <CustomButton text="GO TO CHECKOUT" type="button" Click={GoToCheckout}/>

</div>

);
}
