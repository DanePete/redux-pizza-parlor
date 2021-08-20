import axios from "axios";
import { useState } from "react";
import {useDispatch} from 'react-redux';

function IndividualPizza({pizza, id}) {
    console.log('id', id)

    const dispatch = useDispatch();

    let [removeButton, setRemoveButton] = useState(false);


    const Submit = () => {
        setRemoveButton(!removeButton)
        let type = 'ADD_PIZZA';
            if (removeButton) {
                type = 'REMOVE_PIZZA'
            }
        dispatch({ 
            type: type,
            payload: {...pizza, quantity: 1}
        });
    }
   

    return (
        <>
        
        <p>{pizza.name} {pizza.description} {pizza.price}</p>
        {removeButton ?  
        <button onClick={Submit}>Remove Pizza</button>
        : <button onClick={Submit}>Add Pizza</button>
        }
        </>


    )

}
export default IndividualPizza;