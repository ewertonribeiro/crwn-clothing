import './style.scss';
import CollectionItem from '../CollectionItem';


export default function CollectionPreview({title,items}){



return(
<div className="collectionPreview">

    <h1>{title.toUpperCase()}</h1>
    <div className="preview">

        {
        items.filter(item=>item.id<5).map(({id , ...rest})=>(
            <CollectionItem key={id} id={id} {...rest} />
        ))
        }

    </div>
</div>

)
}
