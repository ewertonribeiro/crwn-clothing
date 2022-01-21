import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Reducers/User/user-reducer';
import cartReducer from '../Reducers/Cart/cart-reducer';
import logger from 'redux-logger';



export default configureStore({
reducer:{
user:userReducer,
cart:cartReducer
},

middleware:[logger],


})
