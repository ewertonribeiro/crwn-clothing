import { createSlice } from '@reduxjs/toolkit';
import CartUtils from './cart.utils';

const cartSlice = createSlice({
name:"Cart",
initialState:{
cartItems:[],
show:false,
},
reducers:{

addItemTocart:(state,action)=>{


state.cartItems = CartUtils.AddItemsToCart(state.cartItems , action.payload);

},

handleShowCart(state){

state.show = CartUtils.ShowCart(state)

},
clearItemFromCart(state,action){


state.cartItems.splice(CartUtils.ClearItemFromCart(state, action),1)

},

incrementQuantity(state,action){


state.cartItems = CartUtils.increment(state, action);

},
decrementQuantity(state,action){

state.cartItems = CartUtils.decrement(state, action);

},
cleanCart(state){
state.cartItems = [];
}

}
})




export const { addItemTocart , handleShowCart , clearItemFromCart , incrementQuantity , decrementQuantity , cleanCart} = cartSlice.actions;

export default cartSlice.reducer;
