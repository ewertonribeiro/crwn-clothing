import './style.scss'



export default function CustomButton({text , type="submit" , Click}){

return(

    <button
    type={type}
    className="login-btn"
    onClick={Click}
    >
    {text}

    </button>


)
}
