import { Routes as Switch , Route  } from 'react-router-dom';
import {Home} from '../Pages/Home'
import Shop from '../Pages/Shop';
import SignIn from '../Pages/SigIn';
import Checkout from '../Pages/Checkout';
import Section from '../Pages/Sections';




export default function Routes(){

return(


    <Switch>

        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/shop/:section" element={<Section/>}/>
        <Route path="/checkout" element={<Checkout/>} />

    </Switch>




)
}
