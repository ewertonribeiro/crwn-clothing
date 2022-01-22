import './style.scss'
import CustomButton from '../Buttons/CustomButton'
import { useFormik } from 'formik';
import { auth , createUserWithEmailAndPassword } from '../../Services/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/Reducers/User/user-reducer';

const validate = ({name,email,password,confirmpassword})=>{

const errors = {};

if(!name){

errors.name = "You must Provide a DisplayName";

}

if(!email){

errors.email = "You must provide a valid email";

}

if(!password || password.lenght < 6){

errors.password = "You must provide a password and it has to be at least 6 characters";

}

if(!confirmpassword || confirmpassword !== password){

errors.confirmpassword = "The passwords do not match";

}

return errors;

}



export default function SignInForm(){


const dispatch = useDispatch();
const navigate = useNavigate();

const formik = useFormik({
initialValues:{
name:"",
email:"",
password:null,
confirmpassword:null
},

validate,

onSubmit:async values =>{

try{
const newuser = await createUserWithEmailAndPassword(auth,values.email , values.password)

newuser.displayName = values.name;

const newUser = {
name:newuser.displayName,
email:newuser.user.email,
id:newuser.user.uid,
}

dispatch(setUser(newUser));

navigate("/");

}catch(err){

alert(err.message)

}




}

})





return(
<>
<div className="signin-form-container">

    <form className="signin-form" onSubmit={formik.handleSubmit}>
        <div className="form-text-container">
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>
        </div>

        <div className="login-input-group">

             <label htmlFor='display-name' className='display-name-label'>Display Name</label>
             <input
             className="display-name"
             type="text"
             id="name"
             name="name"
             onBlur={formik.handleBlur}
             onChange={formik.handleChange}
             value={formik.values.name}
         />

             {formik.touched.name && formik.errors.name ? <div className="errors">{formik.errors.name}</div> : undefined}

         </div>

         <div className="login-input-group">

            <label htmlFor='signin-email'  className='signin-email-label'>Email</label>
            <input
            className="signin-email"
            type="email"
            id="email"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
        />

            {formik.touched.email && formik.errors.email ? <div className="errors">{formik.errors.email}</div> : undefined}

        </div>

        <div className="login-input-group">

            <label htmlFor='signin-password' className='signin-password-label'>Senha</label>
            <input
            className="signin-password"
            type="password"
            id="password"
            name="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}

        />

            {formik.touched.password && formik.errors.password ? <div className="errors">{formik.errors.password}</div> : undefined}

        </div>

        <div className="login-input-group">

            <label htmlFor='signin-confirm-password' className='signin-confirm-password-label'>Confirme a senha</label>
            <input
            className="signin-confirm-password"
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.confirmpassword}

        />

            {formik.touched.confirmpassword && formik.errors.confirmpassword ? <div className="errors">{formik.errors.confirmpassword}</div> : undefined}

        </div>

             <div className='signin-buttons-container'>

                 <CustomButton text="SIGN UP"/>

            </div>
    </form>
    </div>
</>
)
}
