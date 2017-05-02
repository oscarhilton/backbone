import React from 'react';  
import { Route, IndexRoute } from 'react-router';  
import Main from './components/Main';  
import HomePage from './components/home/HomePage';
import ProductsPage from './components/products/ProductsPage';
import NewProductPage from './components/products/NewProductPage';

export default (
  
  <Route path="/" component={Main}>
    <IndexRoute component={HomePage} />
    <Route path="/products" component={ProductsPage}>
      <Route path="/products/new" component={NewProductPage} />
    </Route>
  </Route>
  
);