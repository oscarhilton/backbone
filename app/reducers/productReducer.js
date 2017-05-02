import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function productReducer(state = initialState.products, action) {
    switch(action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
        return action.products.results
    case types.DELETE_PRODUCT_SUCCESS:
        const newState = Object.assign([], state);
        const indexOfProductToDelete = state.findIndex(product => {
            return product._id == action.product._id
        })
        newState.splice(indexOfProductToDelete, 1);
        browserHistory.push('/');
        return newState;
    case types.CREATE_PRODUCT_SUCCESS:
        return [
            ...state.filter(product => product._id !== action.product._id),
            Object.assign({}, action.product.results)
        ]
    default: 
        return state;
  }
}

