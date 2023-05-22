import React from "react"

function Item({count, price, type, buyItem}) {

  console.log('test');
  return (
    <div>
      Price: {price}
      <button onClick={() => buyItem(type)}>Buy a {type}</button>
      You have {count} {type}.
    </div>
  );
}

export default React.memo(Item)
