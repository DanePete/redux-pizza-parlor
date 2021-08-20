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
            return state + action.payload.price;
        case ('REMOVE_PIZZA'):
            return state - action.payload.price;
        default:
    }
    return state
}

const pizzaCart = (state = [], action) => {
    switch(action.type) {
        case ('ADD_PIZZA'):
            console.log('Add Pizza')
            return [...state, action.payload];
        case ('REMOVE_PIZZA'):
            console.log('Removed Pizza')
            // need specific info about which pizza to delete
            // this will only work for the basic project
            let newState = [];
            for (let pizza of state) {
                if (pizza.name != action.payload.name) {
                    newState.push(pizza);
                }
            }
            return newState;
    }
    return state;
};

const store = createStore(
    combineReducers({
        total,
        pizzaCart
    })
);


ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
