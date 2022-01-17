import './style.scss'
import LoginButton from '../Buttons/Login'
import GoogleButton from '../Buttons/Google';
import {useFormik} from 'formik';
import { useContext } from 'react';
import {SessionContext} from '../../Contexts/SessionContext'
import { auth , signInWithEmailAndPassword } from '../../Services/firebase'
import {useNavigate} from 'react-router-dom';


const validate = ({Email,Password})=>{

const errors = {};

if(!Email){
errors.Email = "You must provide a valid email";
}

if(!Password){
errors.Password = "You must provide a valid password";
}

return errors;

}



export default function LoginForm(){

const {setUser} = useContext(SessionContext);
const navigate = useNavigate()

const formik = useFormik({
initialValues:{
Email:"",
Password:null
},

validate,

onSubmit:async ({Email , Password}) =>{
try{
const login = await signInWithEmailAndPassword(auth , Email , Password);

setUser({
email:login.user.email,
id:login.user.uid,
name:login.displayName
})

navigate("/");

}catch(err){
alert(err.message)

}

}
})



return(
<>
<div className="login-form-container">
    <div className="form-text-container">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        </div>
        <form className="login-form" onSubmit={formik.handleSubmit}>
            <div className="login-input-group">
            <label htmlFor='login-email shrink' className='login-email-label'>Email</label>
            <input
            className="login-email"
            type="email"
            id="Email"
            name="Email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.Email}
        />
                {formik.touched.Email && formik.errors.Email ? <div className="errors">{formik.errors.Email}</div> :undefined}
        </div>

        <div className="login-input-group">

            <label htmlFor='login-password' className='login-password-label'>Senha</label>

                <input
                className="login-password"
                type='password'
                id="Password"
                name="Password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.Password}
            />

                {formik.touched.Password && formik.errors.Password ? <div className="errors">{formik.errors.Password}</div> : undefined }

            </div>
             <div className='login-buttons-container'>

                 <LoginButton text="SIGN IN"/>
                 <GoogleButton/>
            </div>


        </form>
</div>

</>
)
}
