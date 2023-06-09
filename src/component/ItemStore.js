import Item from './Item.js';
import {incrementItem} from '../cakeSlice.js';
import {useSelector} from 'react-redux';
import styles from '../styles/itemStore.module.css'; 
import {typeList} from '../constants/constant.js';

function ItemStore() {
  const items = useSelector((state) => state.counter.items);

  return (
    <div className={styles.items}>
      <p className={styles.store}>STORE</p>
      <div className={styles.products}>
        <p>Products</p>
        {typeList.map((item) => {
          return (
            <Item key={item}
                  count={items[item].count} 
                  price={items[item].price} 
                  type={item} 
                  increment={incrementItem(item)}>
            </Item>
          )
        })}
      </div>
      <div className={styles.upgrades}>
        <p>Upgrades</p>
        {/* {typeList.map((item) => {
          return (
            <Item key={item}
                  count={items[item].count} 
                  price={items[item].price} 
                  type={item} 
                  increment={incrementItem(item)}>
            </Item>
          )
        })} */}
      </div>
    </div>
  )
}

export default ItemStore;
