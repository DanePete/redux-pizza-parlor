import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from "react-router-dom"
import axios from 'axios';

function CheckoutScreen() {
    const history = useHistory();
    const dispatch = useDispatch();

    let [customerInfo, pizzas, total] = useSelector(state => {
        return [state.customerInfo, state.pizzaCart, state.total]
    }); 

    const order = () => {
        axios({
            method: 'POST',
            url: '/api/order',
            data: { ...customerInfo, total, pizzas}
        }).then(response => {
            history.push('/');
            dispatch({
                type: 'CLEAR'
            });
        }).catch(error => {
            console.log('Failed to POST: ', error);
            alert('Failed to POST. See console for details.');
        });
    }
    
    return (
        <>
        {/* display checkout info, seperate div for deliver/pickup */}
        <p>{customerInfo.customer_name}</p>
        <p>{customerInfo.street_address}</p>
        <p>{customerInfo.city}</p>
        <p>{customerInfo.zip}</p>
        <p>{customerInfo.type}</p>
        {/* display pizzas in table - col: name, col: cost */}
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {/* map function to create rows */}
                {pizzas.map(pizza => 
                    <tr>
                        <td>{pizza.name}</td>
                        <td>{pizza.price}</td>
                    </tr>)}
            </tbody>
        </table>
        {/* display total */}
        <p>{total}</p>
        {/* checkout button */}
        <button className="btn btn-primary" onClick={order}>CHECKOUT</button>
        </>
    );
};

export default CheckoutScreen;