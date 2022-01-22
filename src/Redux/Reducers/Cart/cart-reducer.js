import { createSlice } from '@reduxjs/toolkit';
import CartUtil from './cart.utils';

const cartSlice = createSlice({
name:"Cart",
initialState:{
cartItems:[],

},
reducers:{

addItemTocart:(state,action)=>{


state.cartItems = CartUtil(state.cartItems , action.payload);

}

}

})

export const { addItemTocart } = cartSlice.actions;

export default cartSlice.reducer;
