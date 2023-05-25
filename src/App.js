import Cake from './Components/Cake.js';
import Item from './Components/Item.js';
import {useEffect} from 'react';
import {incrementByAmount, incrementCursor, incrementGrandma, incrementBakery} from './cakeSlice'
import {useSelector, useDispatch} from 'react-redux'
import styles from './styles/app.module.css'; 

function App() {
  const cursorCount = useSelector((state) => state.counter.cursor);
  const cursorPrice = useSelector((state) => state.counter.cursorPrice);
  const grandMaCount = useSelector((state) => state.counter.grandMa);
  const grandMaPrice = useSelector((state) => state.counter.grandMaPrice);
  const bakeryCount = useSelector((state) => state.counter.bakery);
  const bakeryPrice = useSelector((state) => state.counter.bakeryPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    // used to increment the number of cakes each seconds
    if (cursorCount > 0) {
      const interval = setInterval(() => {
        dispatch(incrementByAmount(cursorCount ));
        grandMaCount && dispatch(incrementByAmount(grandMaCount * 5));
        bakeryCount && dispatch(incrementByAmount(bakeryCount * 30));
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }
  }, [dispatch, cursorCount, grandMaCount])


  return (
    <div className={styles.app}>
      <div className={styles.cake}>
        <Cake></Cake>
      </div>
      <div className={styles.items}>
        <Item count={cursorCount} 
              price={cursorPrice} 
              type={'cursor'} 
              increment={incrementCursor()}>
        </Item>
        <Item count={grandMaCount} 
              price={grandMaPrice} 
              type={'grandMa'} 
              increment={incrementGrandma()}>
        </Item>
        <Item count={bakeryCount} 
              price={bakeryPrice} 
              type={'bakery'} 
              increment={incrementBakery()}>
        </Item>
      </div>
    </div>
  );
}

export default App;
