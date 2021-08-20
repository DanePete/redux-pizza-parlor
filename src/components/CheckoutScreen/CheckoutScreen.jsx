import {useSelector} from 'react-redux';

function CheckoutScreen() {

    let [customerInfo, pizzaList, total] = useSelector(state => 
            [state.customerInfo, state.pizzaCart, state.total]); 

    const order = () => {

    }

    // note changes will need to be made depending on how reducer is set up.
    return (
        <>
        {/* display checkout info, seperate div for deliver/pickup */}
        <p>{customerInfo.customer_name}</p>
        <p>{customerInfo.address}</p>
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
                {pizzaList.map(pizza => 
                    <tr>
                        <td>{pizza.name}</td>
                        <td>{pizza.price}</td>
                        </tr>)}
            </tbody>
        </table>
        {/* display total */}
        <p>{total}</p>
        {/* checkout button */}
        <button onClick={order}>CHECKOUT</button>
        </>
    );
};

export default CheckoutScreen;