import './style.scss';
import CustomButton from '../Buttons/CustomButton'
import { useDispatch } from 'react-redux';
import { addItemTocart } from '../../Redux/Reducers/Cart/cart-reducer';



export default function CollectionItem(props){

const dispatch = useDispatch();

function AddToCart(){

dispatch(addItemTocart(props));


}

return(
<div className="collectionItem">

    <div
    className='img'
    style={{backgroundImage:`url(${props.imageUrl})`}}
/>

    <CustomButton text="ADD TO CART" type="button" Click={AddToCart}/>

    <div className='collectionFooter'>
      <span className='name'>{props.name}</span>
      <span className='price'>{props.price}</span>
    </div>

</div>
)
}
