import './style.scss'
import {useNavigate} from 'react-router-dom'

export function MenuItem({title , linkUrl , imageUrl , size}){


const navigate = useNavigate()


function HandleClick(){

navigate(`/${linkUrl}`)

}


return(
<div
className={`${size} menu-item`}
onClick={HandleClick}

>

<div
className="background-image"
style = {
    {
    backgroundImage:`url(${imageUrl})`
    }
}
/>
<div className="content">
    <h1 className="title">{title.toUpperCase()}</h1>
    <span className="subtitle">SHOP NOW</span>
</div>
</div>
 )
}
