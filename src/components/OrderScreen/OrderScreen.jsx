// TODO


function OrderScreen({list}) {
  console.log('our list is', list);
  return (
    <>
      {list.map((pizza, i) => {
        //return <IndividualPizza key={i} pizza={pizza} />;
      })}
    </>
  )
}

export default OrderScreen;