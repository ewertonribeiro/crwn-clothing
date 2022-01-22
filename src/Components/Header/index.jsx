import './style.scss'
import logo from '../../Assets/crown.svg';
import { Link } from 'react-router-dom';
import { signOut as SignOut, auth } from '../../Services/firebase';
import { useSelector , useDispatch } from 'react-redux';
import { logOut } from '../../Redux/Reducers/User/user-reducer'
import CartBag from '../CartBagIcon/index';
import { Cart } from '../Cart'

export default function Header(){

const user = useSelector( state => state.user.user)
const dispatch = useDispatch();


async function signOut(){

try{
await SignOut(auth);

dispatch(logOut());
alert("You are no longer logged")

}catch(err){

alert(err.code)

}


}


return(

<header className="header">

    <div className="header-container">

        <div className="menu-container">
            <Link to="/">

                <img alt="Logo" src={logo} width={60} height={60}/>

            </Link>
        </div>

    <nav className='menu'>

        <Link to='/shop' className="selected">SHOP</Link>
        <Link to='#'>CONTACT</Link>
        {
        user ?
        <Link to="#" onClick={signOut}>SIGN OUT</Link>
        :
        <Link to="/signin" >SIGN IN</Link>
        }
        <CartBag   />
    </nav>

    <Cart />
    </div>


</header>
)
}

