import {useState } from "react";
import {useDispatch , useSelector } from "react-redux";
import {handleShow} from '../../../Redux/Reducers/Stripe/stripe-reducer';


import axios from "axios";

import FormStripe from "../../StripeComponent/Form";


import "./style.scss";

export default function StripeButton(){

const CartItems = useSelector(store=>store.cart.cartItems);
const Total = CartItems.map(item=>item.count*item.price).reduce((acumulated , item)=>acumulated += item ,0)


const dispatch = useDispatch()

const [options,setOptions] = useState(null)


async function handleClick(){

if(CartItems.length<=0){

alert("Your cart is empty");
return
}

const {data} = await axios.post("http://localhost:5000",{amount:Total * 100});

setOptions({
clientSecret:data.client_secret
})

dispatch(handleShow());
}

return(


<div className="stripe-container">
    {CartItems.length<=0 || !options ? <div></div> : <FormStripe options={options}/>}


    <button className="stripe-button"  onClick={handleClick}>Pay Now</button>


</div>
)

}
