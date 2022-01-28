import { PaymentElement } from '@stripe/react-stripe-js';

import CustomButton from '../Buttons/CustomButton';

import {useSelector , useDispatch} from 'react-redux';
import { handleShow as handleShowStripe } from '../../Redux/Reducers/Stripe/stripe-reducer';

import {useNavigate} from 'react-router-dom';

import "./style.scss"

export default function PaymentForm(){
const CartItems = useSelector(store=>store.cart.cartItems);

const Total = CartItems.map(item=>item.count*item.price).reduce((acumulated , item)=>acumulated += item ,0)

const dispatch = useDispatch();

const navigate =  useNavigate();

function handleShow(){
dispatch(handleShowStripe());
}

function handleSubmit(){
// dispatch(handleShowStripe());
navigate("/");
console.log("Cliked");
}


return(
<form className="form-stripe-element" onSubmit={handleSubmit}>
    <div className="title-wrapper">
        <h1>CWR SHOPPING LTDA.</h1>
    <div className="close-stripe-button" onClick={handleShow}>&#10008;</div>
    </div>
    <PaymentElement/>

    <h2 className="stripe-title">Total $ {Total}</h2>

    <CustomButton  text="PURCHASE"/>

</form>
)
}
