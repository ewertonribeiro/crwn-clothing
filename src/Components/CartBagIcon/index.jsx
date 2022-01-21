import { ReactComponent as BagIcon } from '../../Assets/shopping-bag.svg';
import './style.scss';

export default function CartBagItem({handleShow}){


return(

<div className="shopping-Bag" onClick={handleShow}>

    <BagIcon className="bag-icon"/>
    <span className="item-count">0</span>

</div>

);
}
