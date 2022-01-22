import { ReactComponent as BagIcon } from '../../Assets/shopping-bag.svg';
import './style.scss';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';




export default function CartBagItem({handleShow}){

const CartItemsSelector = createSelector(
state=>state.cart,
items=>items.cartItems.reduce((value,item)=>value += item.count,0)
);

const CartItems = useSelector(CartItemsSelector);

return(

<div className="shopping-Bag" onClick={handleShow}>

    <BagIcon className="bag-icon"/>
    <span className="item-count">{CartItems}</span>

</div>

);
}


