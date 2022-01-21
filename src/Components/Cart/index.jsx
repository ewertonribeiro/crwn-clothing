import Button from '../Buttons/Login';
import './style.scss';


export function Cart({ show }){

return (

<div className={`${!show ? "hide" : ""} cart`}>

    <div className="cart-items">

    </div>

    <Button text="GO TO CHECKOUT"/>

</div>

);
}
