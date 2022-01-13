import './style.scss'
import {useNavigate} from 'react-router-dom'

export function MenuItem(props){

const navigate = useNavigate()

function HandleClick(){

navigate(`/${props.link}`)

}


return(
<div
className={`${props.size} menu-item`}
onClick={HandleClick}

>

<div
className="background-image"
style = {
    {
    backgroundImage:`url(${props.image})`
    }
}
/>
<div className="content">
    <h1 className="title">{props.title}</h1>
    <span className="subtitle">SHOP NOW</span>
</div>
</div>
 )
}
