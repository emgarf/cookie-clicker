import React from "react"
import {useSelector, useDispatch} from 'react-redux'

function Item({count, price, type, increment}) {
  const cakeCount = useSelector((state) => state.counter.cake);
  const dispatch = useDispatch();

  const handleBuyItem = () => {
    if (price <= cakeCount) {
      dispatch(increment)
    }
  }

  return (
    <div>
      Price: {price}
      <button onClick={() => handleBuyItem()}>Buy a {type}</button>
      You have {count} {type}.
    </div>
  );
}

export default React.memo(Item)
