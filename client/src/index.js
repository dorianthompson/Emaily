import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
//import store from './app/store';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);