import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
name:"Cart",
initialState:{
cartItems:[],

},
reducers:{

addItemTocart:(state,action)=>{

const itemExist = state.cartItems.some(item=>item.name === action.payload.name);

switch (itemExist) {
    case false:

state.cartItems = [...state.cartItems , {...action.payload , count: 1}];

        break;

    default:

const newArray = state.cartItems.map(item=>item.name === action.payload.name && {...item ,count:item.count+=1})

state.cartItems = newArray;


    }
}

}

})

export const { addItemTocart } = cartSlice.actions;

export default cartSlice.reducer;
