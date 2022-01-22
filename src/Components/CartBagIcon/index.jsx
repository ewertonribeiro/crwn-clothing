import { ReactComponent as BagIcon } from '../../Assets/shopping-bag.svg';
import './style.scss';

import { handleShowCart } from '../../Redux/Reducers/Cart/cart-reducer';

import { useSelector , useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';




export default function CartBagItem(){

const CartItemsSelector = createSelector(
state=>state.cart,
items=>items.cartItems.reduce((value,item)=>value += item.count,0)
);

const CartItems = useSelector(CartItemsSelector);
const dispatch = useDispatch()


function ShowCart(){


dispatch(handleShowCart());


}


return(

<div className="shopping-Bag" onClick={ShowCart}>

    <BagIcon className="bag-icon"/>
    <span className="item-count">{CartItems}</span>

</div>

);
}


