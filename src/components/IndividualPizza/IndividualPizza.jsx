import axios from "axios";
import { useState } from "react";
import {useDispatch} from 'react-redux';

function IndividualPizza({pizza, key, id}) {
    console.log('id', id)
    console.log('key', key)
    const dispatch = useDispatch();

    let [removeButton, setRemoveButton] = useState(false);


    const Submit = () => {
        console.log('REMOVE', removeButton);
        setRemoveButton(!removeButton)
        let type = 'ADD_PIZZA';
        console.log('HI', type)
            if (!removeButton) {
                type = 'REMOVE_PIZZA'
            }
            console.log('TYPE', type)
        dispatch({ 
            type: type,
            payload: pizza
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