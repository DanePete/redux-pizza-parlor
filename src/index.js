import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

// Reducers
const total = (state = 0, action) => {
    switch(action.type) {
        case ('ADD_PIZZA'):
            return state + Number(action.payload.price);
        case ('REMOVE_PIZZA'):
            return state - Number(action.payload.price);
        case ('CLEAR'):
            return 0
        default:
    }
    return state
}

const pizzaCart = (state = [], action) => {
    switch(action.type) {
        case ('ADD_PIZZA'):
            return [...state, action.payload];
        case ('REMOVE_PIZZA'):
            // need specific info about which pizza to delete
            // this will only work for the basic project
            let newState = [];
            for (let pizza of state) {
                if (pizza.name != action.payload.name) {
                    newState.push(pizza);
                }
            }
            return newState;
        case ('CLEAR'):
            return []
    }
    return state;
};

const customerInfo = (state = {}, action) => {
        switch(action.type) {
            case ('ADD_CUSTOMER_INFORMATION'):
                return action.payload;
            case ('CLEAR'):
                return {}
            default:

        }
        return state;
}

const store = createStore(
    combineReducers({
        total,
        pizzaCart,
        customerInfo
    })
);


ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
