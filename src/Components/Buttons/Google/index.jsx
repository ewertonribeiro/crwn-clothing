import './style.scss'
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react'
import {SessionContext} from '../../../Contexts/SessionContext'






export default function GoogleButton(){

const {SignInWithGoogle , user} = useContext(SessionContext);

const navigate = useNavigate();

async function signinWithGoogle(){


if(!user){

await SignInWithGoogle();
}
navigate("/");

}



return(
<button type="button" className="login-google-btn" onClick={signinWithGoogle}>SIGN IN WITH GOOGLE</button>

)
}


