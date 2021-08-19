// TODO
import IndividualPizza from "../IndividualPizza/IndividualPizza";

function OrderScreen({list}) {
  console.log('our list is', list);

  return (
    <>
      {list.map((pizza, i) => {
      <IndividualPizza 
        key={i} 
        pizza={pizza}  
      />;
      })}
    </>
  )
}

export default OrderScreen;