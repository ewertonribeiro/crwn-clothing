import Routes from './Routes/Routes';
import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './Services/firebase';
import { setUser } from './Redux/Reducers/User/user-reducer';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log(cart)
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, uid, email } = user;

        const newUser = {
          name: displayName,
          id: uid,
          email,
        };

        dispatch(setUser(newUser));
      } else {
        //throw new Error('Esta faltando informações da sua conta Goolgle')
      }
    });

    return () => {
      unSubscribe();
    };
  }, [dispatch]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}
export default App;
