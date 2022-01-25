import { render} from 'react-dom';
import './index.scss';
import App from './App';

import {Provider} from 'react-redux';
import Store from './Redux/Store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

//import * as serviceWorkerRegistration from './serviceWorkerRegistration';
let persistor = persistStore(Store);

render(
<Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorkerRegistration.unregister();
