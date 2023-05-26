import Item from './Item.js';
import {incrementItem} from '../cakeSlice'
import {useSelector} from 'react-redux'
import styles from '../styles/itemStore.module.css'; 
import {typeList} from '../constants/constant'

function ItemStore() {
  const items = useSelector((state) => state.counter.items);

  return (
    <div className={styles.items}>
      <p>Store</p>
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
  )
}

export default ItemStore;
