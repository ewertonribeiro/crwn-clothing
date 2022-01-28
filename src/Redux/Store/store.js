import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Reducers/User/user-reducer';
import cartReducer from '../Reducers/Cart/cart-reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import stripeReducer from '../Reducers/Stripe/stripe-reducer';

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';



const reducers = combineReducers({
user:userReducer,
cart:cartReducer,
stripe:stripeReducer
})

const persistConfig = {
key:"root",
storage,
whitelist:['cart' , 'stripe']

};


const persistedReducer = persistReducer(persistConfig , reducers);



const store =  configureStore({
reducer:persistedReducer,

middleware:[logger , thunk],


})

export default store;
