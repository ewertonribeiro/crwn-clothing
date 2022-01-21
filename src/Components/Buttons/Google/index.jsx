import './style.scss'
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInWithPopup , auth , provider} from '../../../Services/firebase'
import { setUser } from '../../../Redux/Reducers/User/user-reducer'



export default function GoogleButton(){

const dispatch = useDispatch();
//const user = useSelector( state => state.user.user);
const navigate = useNavigate();


async function SignInWithGoogle(){

try{

const response = await signInWithPopup(auth,provider);

const {uid , email , displayName} = response.user;

const newUser = {
name:displayName,
email:email,
id:uid
}

dispatch(setUser(newUser));

navigate("/");

}catch(err){

alert(err.message);

}




}

return(
<button type="button" className="login-google-btn" onClick={SignInWithGoogle}>SIGN IN WITH GOOGLE</button>

)
}



