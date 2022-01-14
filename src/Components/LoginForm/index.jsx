import './style.scss'
import LoginButton from '../Buttons/Login'
import GoogleButton from '../Buttons/Google'
export default function LoginForm(){

return(
<>
<div className="login-form-container">
    <div className="form-text-container">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        </div>
        <form className="login-form">
            <div className="login-input-group">
            <label htmlFor='login-email shrink' className='login-email-label'>Email</label>
            <input className="login-email" type="email"/>

            <label htmlFor='login-password' className='login-password-label'>Senha</label>
            <input className="login-password" type='password'/>
            </div>
             <div className='login-buttons-container'>

                 <LoginButton/>
                 <GoogleButton/>
            </div>


        </form>
</div>

</>
)
}
