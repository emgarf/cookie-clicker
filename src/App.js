import Cake from './component/Cake.js';
import ItemStore from './component/ItemStore.js';
import {useEffect} from 'react';
import {incrementByAmount} from './cakeSlice';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles/app.module.css';
import logo from './cake_clicker.png';
import {typeList}  from './constants/constant.js';

function App() {
  const items = useSelector((state) => state.counter.items);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    // used to increment the number of cakes each seconds
    const interval = setInterval(() => {
      typeList.map((item) => items[item].count && dispatch(incrementByAmount(items[item].count * items[item].revenue)));
      localStorage.setItem("gameState", JSON.stringify(counter));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, items, counter])

  return (
    <div className={styles.app}>
      <div className={styles.cake}>
        <div className={styles.logo}>
          <img src={logo} alt="logo"/>
        </div>
        <Cake></Cake>
      </div>
      <ItemStore></ItemStore>
    </div>
  );
}

export default App;
