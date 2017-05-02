import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import routes from './routes';


import {loadProducts} from './actions/productActions';
// import Main from './components/Main';
// import HomePage from "./components/home/HomePage";
// import Products from "./components/products/ProductsPage";
const store = configureStore();
store.dispatch(loadProducts());

    ReactDOM.render(
        <Provider store={store}>
            <Router history={hashHistory} routes={routes} />
        </Provider>,
        document.getElementById('app')
     );
     