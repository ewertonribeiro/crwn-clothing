import './style.scss';
import CollectionItem from '../CollectionItem';


export default function CollectionPreview(props){



return(
<div className="collectionPreview">

    <h1>{props.title.toUpperCase()}</h1>
    <div className="preview">

        {
        props.items.filter(item=>item.id<4).map(({id , ...rest})=>(
            <CollectionItem key={id} {...rest} />
        ))
        }

    </div>
</div>

)
}
