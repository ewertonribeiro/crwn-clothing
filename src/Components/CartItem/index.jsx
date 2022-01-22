import {useEffect} from "react";
import { useSelector } from "react-redux";


import "./style.scss";

export default function CartItem({imageUrl , price , name , count }){

const Cart = useSelector(store=>store.cart.cartItems)


useEffect(()=>{



},[Cart])

return(
<>
<div className="cart-item" >

    <div className="img-wrapper" >

        <img className="img" alt="item" src={imageUrl} />
    </div>

    <div className="text-wrapper" >

        <span className="name" >{name}</span>
        <span className="price" >{count} X ${price}</span>

    </div>
</div>


</>

)

}
