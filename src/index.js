import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import {Switch, HashRouter, Route} from 'react-router-dom';
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
        <Route component={App} ></Route>
        </Switch>
        </HashRouter>
    </Provider>,
    document.querySelector('#root')
);