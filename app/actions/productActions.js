import * as types from './actionTypes';
import ProductApi from '../api/ProductApi';

export function loadProductsSuccess(products) {
    return {
        type: types.LOAD_PRODUCTS_SUCCESS, 
        products
    };
}

export function createProductSuccess(product) {
  return {
        type: types.CREATE_PRODUCT_SUCCESS, 
        product
  }
}

export function deleteProductSuccess(product) {
  return {
        type: types.DELETE_PRODUCT_SUCCESS, 
        product
  }
}

export function loadProducts() {
    return function(dispatch) {
        return ProductApi.getProducts().then(products => {
            dispatch(loadProductsSuccess(products));
            }).catch(error => {
                throw(error);
            });
    };
}

export function createProduct(Product) {
  return function (dispatch) {
    return ProductApi.createProduct(Product).then(products => {
            dispatch(createProductSuccess(products));
            }).catch(error => {
                throw(error);
            });
  };
}

export function deleteProduct(Product) {
  return function (dispatch) {
    return ProductApi.deleteProduct().then(products => {
            dispatch(deleteProductSuccess(products));
            }).catch(error => {
                throw(error);
            });
  };
}