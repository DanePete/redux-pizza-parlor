import axios from "axios";
import { useState } from "react";
import {useDispatch} from 'react-redux';

function IndividualPizza({pizza, key}) {

    const [pizza, setPizza] = useState('');

    // const Submit = (event) => {
    //     event.preventDefault();
    //     axios({
    //         method: 'POST',
    //         url: '/api/pizza',
    //         data: {
    //             name: name,
    //             description: description,
    //             price : price
    //         }
    //     }).then((response) => {
    //         pizza.fetchPizzas(response)
    //     }).catch((error) => {
    //         console.log('POST error', error)
    //     })
    // }


    return (
        <>
        <p>{pizza.name} {pizza.description} {pizza.price}</p>
        <button onClick={Submit}>Add Pizza</button>
        </>


    )

}
export default IndividualPizza;