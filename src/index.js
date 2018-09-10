import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import makeStore, { history } from './store'

import './index.css';
import { YamlApp } from './containers/Playground';
import registerServiceWorker from './registerServiceWorker';

const target = document.getElementById('root');
const store = makeStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <YamlApp />
        </ConnectedRouter>
    </Provider>,
    target
)

registerServiceWorker();
