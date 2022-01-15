import './style.scss'
import LoginButton from '../Buttons/Login'

export default function SignInForm(){

return(
<>
<div className="signin-form-container">

    <form className="signin-form">
        <div className="form-text-container">
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>
        </div>
        <div className="login-input-group">
             <label htmlFor='display-name' className='display-name-label'>Display Name</label>
             <input className="display-name" type="text"/>
        </div>
        <div className="login-input-group">
            <label htmlFor='signin-email'  className='signin-email-label'>Email</label>
            <input className="signin-email" type="email"/>
        </div>
        <div className="login-input-group">
            <label htmlFor='signin-password' className='signin-password-label'>Senha</label>
            <input className="signin-password" type="password"/>
        </div>
        <div className="login-input-group">
            <label htmlFor='signin-confirm-password' className='signin-confirm-password-label'>Confirme a senha</label>
            <input className="signin-confirm-password" type="password"/>
        </div>
             <div className='signin-buttons-container'>

                 <LoginButton text="SIGN UP"/>

            </div>
    </form>
    </div>
</>
)
}
