import './style.scss';
import CollectionItem from '../CollectionItem';
import {useNavigate} from 'react-router-dom';


export default function CollectionPreview({title , items , routeName}){

const navigate = useNavigate();


function goToSection(){

navigate(`/shop/${routeName}`);

}

return(
<div className="collectionPreview">
    <h1 onClick={goToSection}>{title.toUpperCase()}</h1>
    <div className="preview">

        {
        items.filter(item=>item.id<4).map(({id , ...rest})=>(
            <CollectionItem key={id} id={id} {...rest} />
        ))
        }

    </div>
</div>

)
}
