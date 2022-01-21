import './style.scss';
import { MenuItem } from '../MenuItem';
import { useState } from 'react';
import { Sessions } from '../../Data/Sessions';


export function MenuList(){

const [session ,] = useState(Sessions);



return(
<div className="directory-menu">

    {
    session.map(session=>(
        <MenuItem
        key={session.id}
        title={session.title}
        image={session.imageUrl}
        link={session.linkUrl}
        size={session.size}
        />
    )
    )
    }
</div>

);

};
