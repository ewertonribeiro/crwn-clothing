import {useSelector} from "react-redux";




export function UseTotal(){


const CartItems = useSelector(store=>store.cart.cartItems);
const Total = CartItems.map(item=>item.count*item.price).reduce((acumulated , item)=>acumulated += item ,0)



return Total;


}
