import {Component} from "react";
import CollectionData from "../../Data/Collection";
import CollectionPreview from "../../Components/CollectionPreview";
import './style.scss'


export default class Shop extends Component{
constructor(){
super();

this.state = {

CollectionData

};

}
componentDidMount(){
console.log(this.state)
}

render(){

return(
<>


<div className="Shop-Page">

    {
    this.state.CollectionData.map(({id , ...rest})=>(
    <CollectionPreview key={id} {...rest} />
    ))
    }

</div>
</>
)
}


}
