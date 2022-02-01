import '../style.scss'

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { useSelector } from 'react-redux';

import PaymentForm from '../index.jsx'

const stripePromise = loadStripe('pk_test_51KMJgWDs0RH8yZRdRM0aTmtMqXWyRlKBYy5f2CiBj2jOCUQeasuP4vq5wyAf3pH3yZTM1xhRRLzrRnLWxDqIKjXW00SqjgZVh1')


export default function FormStripe({options}){

const show = useSelector(store=>store.stripe.show);

return(
<div>
{
!show
?
""
:
<div className="stripe-form-container">

    <Elements stripe={stripePromise} options={options}>
        <PaymentForm/>
    </Elements>



</div>


}

</div>
)


}
