// TODO
import React from 'react';
import { useHistory } from 'react-router-dom';

function CustomerInfo() {

  // allows us to access a history variable
  const history = useHistory();

  const goToCheckOut = () => {
    // let isConfirmed = confirm("Does this complete your order?")

    
    // if (isConfirmed) {
    //   history.push('/customer-information');
    // }
  }

  return (
    <>
    <h2>Step 2: Customer Information</h2>
    
    <button onClick={goToCheckOut}>NEXT</button>
    </>
  )
}

export default CustomerInfo;