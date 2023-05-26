import Cake from './components/Cake.js';
import ItemStore from './components/ItemStore.js';
import {useEffect} from 'react';
import {incrementByAmount} from './cakeSlice'
import {useSelector, useDispatch} from 'react-redux'
import styles from './styles/app.module.css'; 
import logo from './cake_clicker.png'

function App() {
  const cursor = useSelector((state) => state.counter.items.cursor);
  const grandMa = useSelector((state) => state.counter.items.grandMa);
  const bakery = useSelector((state) => state.counter.items.bakery);
  const dispatch = useDispatch();

  useEffect(() => {
    // used to increment the number of cakes each seconds
    const interval = setInterval(() => {
      cursor.count && dispatch(incrementByAmount(cursor.count));
      grandMa.count && dispatch(incrementByAmount(grandMa.count * 5));
      bakery.count && dispatch(incrementByAmount(bakery.count * 30));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, cursor, grandMa, bakery])

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
