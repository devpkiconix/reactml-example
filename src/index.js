import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import makeStore, { history } from './store'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const target = document.getElementById('root');
const store = makeStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    target
)

registerServiceWorker();
