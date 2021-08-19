// TODO
import React from 'react';
import { useHistory } from 'react-router-dom';

function OrderScreen({list}) {

  // allows us to access a history variable
  const history = useHistory();

  const goToCustInformation = () => {
    let isConfirmed = confirm("Does this complete your order?")

    
    if (isConfirmed) {
      history.push('/customer-information');
    }
  }

  return (
    <>
      {list.map((pizza, i) => {
      <IndividualPizza 
        key={i} 
        pizza={pizza}  
      />;
      })}

    <button onClick={goToCustInformation}>NEXT</button>
    </>
  )
}

export default OrderScreen;