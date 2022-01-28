import { useState , useEffect } from "react";
import CollectionData from "../../Data/Collection";
import CollectionPreview from "../../Components/CollectionPreview";
import './style.scss'

export default function Shop(){

const [Collection,setCollection] = useState([]);

useEffect(()=>{

setCollection(CollectionData);
},[])

return(
<>


<div className="Shop-Page">
    {
    Collection.map(({id , ...rest})=>(
    <CollectionPreview key={id} {...rest} />
    ))
    }

</div>
</>
)

}
