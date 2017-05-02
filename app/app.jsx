var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require("react-router");

var Main = require("Main");
var Products = require("Products");
var DisplayProducts = require("DisplayProducts");

    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
            </Route>
            <Route path="/products" component={Products}>
            <IndexRoute component={DisplayProducts} />
            </Route>
        </Router>,
        document.getElementById('app')
     );
     
require("./redux-example.jsx");
     