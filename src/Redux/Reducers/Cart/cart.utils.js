


export default function CartItemsAdd(cartItems , payload){


const itemExist = cartItems.find(item=>item.name === payload.name);

if(itemExist){


const newArray = cartItems.map(item=>item.name === payload.name ? {...item ,count:item.count+=1} : item);


return newArray
}



return cartItems = [...cartItems , {...payload , count:1}]

}
