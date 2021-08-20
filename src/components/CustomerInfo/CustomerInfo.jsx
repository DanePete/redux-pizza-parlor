// TODO
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function CustomerInfo() {

  let [customerInfo, setCustomerInfo] = useState({ customer_name: '', street_address: '', city: '', zip: '', type: '' });

  // allows us to access a history variable
  const history = useHistory();
  const dispatch = useDispatch();

  const handleCustName = (event) => {
    setCustomerInfo({      
        ...customerInfo,
        customer_name: event.target.value,      
    });
  }

  const handleStreetAddress = (event) => {
    setCustomerInfo({      
        ...customerInfo,
        street_address: event.target.value,      
    });
  }
  
  const handleCity = (event) => {
    setCustomerInfo({      
        ...customerInfo,
        city: event.target.value,      
    });
  }

  const handleZip = (event) => {
    setCustomerInfo({      
        ...customerInfo,
        zip: event.target.value,      
    });
  }    

  const handleType = (event) => {
    console.log('type', event.target);
    setCustomerInfo({      
        ...customerInfo,
        type: event.target.value,      
    });
  }    
  
  const dispatchCustomerInfo = (event) => {
    console.log('our cust info', customerInfo);
    event.preventDefault();
    dispatch({
      type: 'ADD_CUSTOMER_INFO',
      payload: customerInfo
    });
    // history.push('/understanding');
  }

  return (
    <>
    <h2>Step 2: Customer Information</h2>
    <form onSubmit={(event) => dispatchCustomerInfo(event)}>
        <input
          onChange={handleCustName}
          value= {customerInfo.customer_name}
          type='text'
          placeholder='Name'
        />

        <input
          onChange={handleStreetAddress}
          value= {customerInfo.street_address}
          type='text'
          placeholder='Street Address'
        />

        <input
          onChange={handleCity}
          value= {customerInfo.city}
          type='text'
          placeholder='City'
        />         

        <input
          onChange={handleZip}
          value= {customerInfo.zip}
          type='text'
          placeholder='Zip'
        />      

        <label for="pickup">Pickup</label>     

        <div id="group1">
          <input
            onChange={handleType} 
            type="radio" 
            id="pickup" 
            name="group1" 
            value='pickup'
          />

          <label for="delivery">Delivery</label>     
          <input 
            onChange={handleType}
            type="radio" 
            id="deliver" 
            name="group1" 
            value='delivery'
          />
        </div>
                              
        <input type='submit' value='Submit' />
    </form>

      {/* <button onClick={goToCheckOut}>NEXT</button> */}
    </>
  )
}

export default CustomerInfo;