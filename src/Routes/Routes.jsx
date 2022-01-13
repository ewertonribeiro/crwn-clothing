import {BrowserRouter , Routes as Switch, Route} from 'react-router-dom';
import {Home} from '../Pages/Home'
import Hats from '../Pages/Sections/Hats';
import Womens from '../Pages/Sections/Womens';
import Mens from '../Pages/Sections/Mens';
import Sneakers from '../Pages/Sections/Sneakers'
import Jackets from '../Pages/Sections/Jackets'
import Shop from '../Pages/Shop';




export default function Routes(){

return(
<BrowserRouter>

    <Switch>

        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/hats" element={<Hats/>} />
        <Route path="/jackets" element={<Jackets/>} />
        <Route path="/sneakers" element={<Sneakers/>} />
        <Route path="/womens" element={<Womens/>} />
        <Route path="/mens" element={<Mens/>}/>

    </Switch>

</BrowserRouter>


)
}
