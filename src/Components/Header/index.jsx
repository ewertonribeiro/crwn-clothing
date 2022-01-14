import './style.scss'
import logo from '../../Assets/crown.svg';
import { Link } from 'react-router-dom';


export default function Header(){




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
        <Link to='/signin'>SIGN IN</Link>
    </nav>

    </div>

</header>
)
}
