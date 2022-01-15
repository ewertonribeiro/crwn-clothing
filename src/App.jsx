import Routes from './Routes/Routes';
import Header from './Components/Header';
import {BrowserRouter} from 'react-router-dom'
import {Auth} from './Contexts/SessionContext'
function App() {
  return (
<div className="App">
    <Auth>
    <BrowserRouter>
        <Header/>
        <Routes/>
    </BrowserRouter>
    </Auth>
    </div>
  );
}

export default App;
