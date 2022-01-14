import Routes from './Routes/Routes';
import Header from './Components/Header';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
<div className="App">
    <BrowserRouter>
        <Header/>
        <Routes/>
    </BrowserRouter>
    </div>
  );
}

export default App;
