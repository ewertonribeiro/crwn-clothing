import './style.scss'



export default function loginButton({text , addToCart}){



if(addToCart){
return(
<button type="button" className="login-btn" onClick={addToCart}>{text}</button>

)
}

return(

<button type="submit" className="login-btn">{text}</button>


)
}
