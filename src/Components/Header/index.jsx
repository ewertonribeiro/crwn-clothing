import logo from '../../Assets/crown.svg';
import { Link } from 'react-router-dom';
import { signOut as SignOut, auth } from '../../Services/firebase';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../Redux/Reducers/User/user-reducer';
import CartBag from '../CartBagIcon/index';
import { Cart } from '../Cart';

import {
  HeaderComponent,
  HeaderContainer,
  HeaderMenu,
  MenuOption,
} from './style.js';

export default function Header() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  async function signOut() {
    try {
      await SignOut(auth);

      dispatch(logOut());
      alert('You are no longer logged');
    } catch (err) {
      alert(err.code);
    }
  }

  return (
    <HeaderComponent>
      <HeaderContainer>
        <div>
          <Link to='/'>
            <img alt='Logo' src={logo} width={60} height={60} />
          </Link>
        </div>

        <HeaderMenu>
          <MenuOption to='/shop'>SHOP</MenuOption>
          <MenuOption to='#'>CONTACT</MenuOption>
          {user ? (
            <MenuOption to='#' onClick={signOut}>
              SIGN OUT
            </MenuOption>
          ) : (
            <MenuOption to='/signin'>SIGN IN</MenuOption>
          )}
          <CartBag />
        </HeaderMenu>

        <Cart />
      </HeaderContainer>
    </HeaderComponent>
  );
}
