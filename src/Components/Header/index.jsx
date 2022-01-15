import './style.scss'
import logo from '../../Assets/crown.svg';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import {SessionContext} from '../../Contexts/SessionContext'
import {signOut as SignOut, auth} from '../../Services/firebase';




export default function Header(){

const {user , setUser} = useContext(SessionContext);


async function signOut(){

try{
await SignOut(auth);

setUser(null);
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
    </nav>

    </div>

</header>
)
}
