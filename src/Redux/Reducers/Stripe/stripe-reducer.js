import { createSlice } from "@reduxjs/toolkit";

import STRIPE_UTILS from "./stripe.utils";


export const stripeSlice = createSlice({
name:"stripe",
initialState:{
show:false
},
reducers: {

handleShow: state =>{

state.show = STRIPE_UTILS.handleShow(state.show)


}

}
})


export const { handleShow } = stripeSlice.actions;

export default stripeSlice.reducer;

