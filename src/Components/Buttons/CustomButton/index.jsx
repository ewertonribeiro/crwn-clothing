import './style.scss'



export default function CustomButton({text , type="submit" , Click , disabled = false , payment}){

return(

    <button
    type={type}
    className={`${payment ? "paymentsucceed" : ""} login-btn`}
    onClick={Click}
    disabled={disabled}
    >
        {
        !payment
        ?
        text
        :
        "Success!"
        }

    </button>


)
}
