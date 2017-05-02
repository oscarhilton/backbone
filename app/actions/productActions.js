import * as types from './actionTypes';
import ProductApi from '../api/ProductApi';

export function loadProductsSuccess(products) {
    return {
        type: types.LOAD_PRODUCTS_SUCCESS, products
    };
}

export function loadProductsI() {
    return function(dispatch) {
        return ProductApi.getProducts().then(products => {
            dispatch(loadProductsSuccess(products));
            }).catch(error => {
                throw(error);
            });
    };
}