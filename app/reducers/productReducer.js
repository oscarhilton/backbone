import * as types from '../actions/actionTypes';
import initialState from './initialState';
import {browserHistory} from 'react-router';


export default function productReducer(state = initialState.products, action) {
    switch(action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
     return Object.assign([], state, action.products)
     
    default: 
      return state;
  }
}