import React from "react"
import {useSelector, useDispatch} from 'react-redux'
import styles from '../styles/item.module.css'; 

function Item({count, price, type, increment}) {
  const cakeCount = useSelector((state) => state.counter.cake);
  const dispatch = useDispatch();

  const handleBuyItem = () => {
    if (price <= cakeCount) {
      dispatch(increment)
    }
  }

  return (
    <div className={styles.item} onClick={() => handleBuyItem()}>
      <div>
        <p className={styles.type}>{type}</p>
        <p className={styles.price}>Price: {price}</p>
      </div>
      <p className={styles.count}>Amount: {count}</p>
    </div>
  );
}

export default React.memo(Item)
