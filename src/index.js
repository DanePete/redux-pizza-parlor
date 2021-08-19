import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { applyMiddleware, combineReducers, useStore } from 'redux';



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
            return [...state, action.payload];
        case ('REMOVE_PIZZA'):
            // need specific info about which pizza to delete
            // this will only work for the basic project
            let newState = [];
            for (pizza of state) {
                if (pizza.name != action.payload.name) {
                    newState.push(pizza);
                }
            }
            return newState;

    }
    return state;
};

ReactDOM.render(<App />, document.getElementById('root'));
