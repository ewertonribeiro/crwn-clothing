import {useEffect , useState} from "react";
import {useParams} from "react-router-dom";
import CollectionData from "../../Data/Collection";

import CollectionItem from "../../Components/CollectionItem";


import './style.scss';



export default function Section(){

const {section} = useParams();
const urlSection = CollectionData.find(Collection=>Collection.title.toLowerCase()===section.toLowerCase());
const [actualSection , setActualSection] = useState(null);

useEffect(()=>{


setActualSection(urlSection)



},[urlSection])

return (

<div className="collection-page">

    <div className="title">

        <h1>{
        actualSection
        ?
        actualSection.title
        :
        'Loading...'}
        </h1>
    </div>

<div className="items">
    {
        actualSection
        ?
        actualSection.items.map(item=>(
        <CollectionItem key={item.id} {...item}/>
        ))
        :
        ""

    }



</div>


</div>

)

}

