import './style.scss'
import LoginForm from '../../Components/LoginForm';


export default function SignIn(){

return(
<div className="signIn-page">


    <LoginForm/>

    <div className="signin-form-container">

        <form className="signin-form">
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>

             <label htmlFor='display-name' className='display-name-label'>Display Name</label>
             <input className="display-name"/>


            <label htmlFor='signin-email' className='signin-email-label'>Email</label>
            <input className="signin-email"/>

            <label htmlFor='signin-password' className='signin-password-label'>Senha</label>
            <input className="signin-password"/>

            <label htmlFor='signin-confirm-password' className='signin-confirm-password-label'>Confirme a senha</label>
            <input className="signin-confirm-password"/>

             <div className='signin-buttons-container'>

                <button type="submit" className="signin-btn">SIGN IN</button>

            </div>




        </form>
    </div>
</div>

)

}
