var redux = require('redux');

console.log('hello from thingy');

class DataStore {
    constructor(){
        this.data = {};
        
        this.bindListeners({
            handleSuccess: DataActions.GET_SUCCESS
        });
        
        this.exportPublicMethods({
            getAll: this.getAll
        })
    }
}

var stateDefault = {
    name: 'Anonymous'
}

var reducer = (state = stateDefault, action) => {
    
    return state;
    
}
var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState ', currentState);

