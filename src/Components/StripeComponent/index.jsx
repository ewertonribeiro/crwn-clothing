import { PaymentElement , useStripe , useElements } from '@stripe/react-stripe-js';

import CustomButton from '../Buttons/CustomButton';

import {useSelector , useDispatch} from 'react-redux';
import { handleShow as handleShowStripe } from '../../Redux/Reducers/Stripe/stripe-reducer';
import { cleanCart } from '../../Redux/Reducers/Cart/cart-reducer';
import {useNavigate} from 'react-router-dom';

import "./style.scss"
import {useState} from 'react';

export default function PaymentForm(){

const CartItems = useSelector(store=>store.cart.cartItems);
const Total = CartItems.map(item=>item.count*item.price).reduce((acumulated , item)=>acumulated += item ,0)

const [payment,setPayment] = useState(false);

const dispatch = useDispatch();
const navigate =  useNavigate();

const stripe = useStripe();
const elements = useElements();

function handleShow(){
dispatch(handleShowStripe());
}


async function handleSubmit(event){

event.preventDefault();

if(!stripe || !elements){
return;
}

const result = await stripe.confirmPayment({
elements,
redirect:"if_required",
});

if(result.error) {
alert(result.error.message);
return;
}

setPayment(true);

setTimeout(()=>{
dispatch(cleanCart());
navigate("/");
},2000)

}


return(
<form className="form-stripe-element" onSubmit={handleSubmit}>
    <div className="title-wrapper">
        <h1>CWR SHOPPING LTDA.</h1>
    <div className="close-stripe-button" onClick={handleShow}>&#10008;</div>
    </div>
    <PaymentElement/>

    <h2 className="stripe-title">Total $ {Total}</h2>

    <CustomButton disabled={!stripe} payment={payment} text="PURCHASE"/>

</form>
)
}
