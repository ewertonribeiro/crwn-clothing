import "./style.scss";

import { useDispatch } from 'react-redux';
import { clearItemFromCart , incrementQuantity , decrementQuantity } from '../../Redux/Reducers/Cart/cart-reducer';




export default function CheckoutItem(item){

const {imageUrl , name , price , count} = item

const dispatch = useDispatch();



function RemoveItem(){

dispatch(clearItemFromCart(item))

}

function IncrementQuantity(){
dispatch(incrementQuantity(item))
}


function DecrementQuantity(){

switch (count) {
    case 1:
        dispatch(clearItemFromCart(item));
        break;

    default:
        dispatch(decrementQuantity(item))

}


}


return(

<div className="checkout-item" >

    <div className="img-container" >

        <img alt="Item" src={imageUrl}/>
    </div>


    <span className="name" >{name}</span>

    <span className="quantity" >
        <div className="decrease-arrow" onClick={DecrementQuantity}>&#10094;</div>
        <span className="value" >{count}</span>
        <div className="increase-arrow" onClick={IncrementQuantity}>&#10095;</div>
    </span>

    <span className="price" >{price}</span>

    <div className="remove-button" >

        <span onClick={RemoveItem}>&#10005;</span>
    </div>

</div>
)

}
