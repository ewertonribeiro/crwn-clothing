import './style.scss';


export default function CollectionItem({name , imageUrl , price}){

return(
<div className="collectionItem">

    <div
    className='img'
    style={{backgroundImage:`url(${imageUrl})`}}
    />

    <div className='collectionFooter'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>

</div>
)
}
