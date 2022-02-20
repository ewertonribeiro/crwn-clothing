import { render } from 'react-dom';
import './index.scss';
import App from './App';

import { Provider } from 'react-redux';
import Store from './Redux/Store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(Store);

render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
