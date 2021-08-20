// TODO
import React from 'react';
import { useHistory } from 'react-router-dom';
import IndividualPizza from '../IndividualPizza/IndividualPizza';

function OrderScreen({list}) {
  console.log('PIZZA', list)

  // allows us to access a history variable
  const history = useHistory();

  const goToCustInformation = () => {
    let isConfirmed = confirm("Does this complete your order?")

    
    if (isConfirmed) {
      history.push('/customer-information');
    }
  }

  return (
    <div className="PizzaContainer">
      {list.map((pizza, i) => {
        return <IndividualPizza 
        key={i} 
        id={i}
        pizza={pizza}  
      />
      })}
    <button onClick={goToCustInformation}>NEXT</button>
    </div>
  )
}

export default OrderScreen;