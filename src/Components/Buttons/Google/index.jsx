import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInWithPopup, auth, provider } from '../../../Services/firebase';
import { setUser } from '../../../Redux/Reducers/User/user-reducer';

import { GooGle } from './style.js';

export default function GoogleButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function SignInWithGoogle() {
    try {
      const response = await signInWithPopup(auth, provider);

      const { uid, email, displayName } = response.user;

      const newUser = {
        name: displayName,
        email: email,
        id: uid,
      };

      dispatch(setUser(newUser));

      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <GooGle type='button' onClick={SignInWithGoogle}>
      SIGN IN WITH GOOGLE
    </GooGle>
  );
}
