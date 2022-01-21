import './style.scss'
import LoginForm from '../../Components/LoginForm';
import SignInForm from '../../Components/SigninForm';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function SignIn(){

const user = useSelector(state=> state.user.user);
const navigate = useNavigate();


if(user){

navigate("/");
}

return(

<div className="signIn-page">


    <LoginForm/>

    <SignInForm/>


        </div>

)

}
