import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import OrderScreen from '../OrderScreen/OrderScreen';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import { useEffect } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  let [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetchPizzas();
  }, [])

  const fetchPizzas = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then((response) => {
      console.log('our response data', response.data);
      setPizzas(response.data);
    }).catch(err => {
      console.log('ERROR ON GET /pizzas', err);
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>

      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

      <Router>

      <Route path="/" exact>
        <OrderScreen 
            list = {pizzas} 
        />
      </Route>

      <Route path="/customer-information" exact>
        <CustomerInfo />
      </Route>

      <Route path="/checkout" exact>
        { /* CREATE COMPONENT checkout */}
      </Route>

      <Route path="/admin" exact>
        { /* CREATE COMPONENT ADMIN */}
      </Route>

      </Router> 

    </div>
  );
}

export default App;
