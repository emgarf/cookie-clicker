import './App.css';
import Cookie from './Components/Cookie.js';
import Item from './Components/Item.js';
import {useEffect} from 'react';
import {increment, incrementByAmount, incrementCursor, incrementGrandma} from './cookieSlice'
import {useSelector, useDispatch} from 'react-redux'

function App() {
  const cookieCount = useSelector((state) => state.counter.cookie);
  const cursorCount = useSelector((state) => state.counter.cursor);
  const cursorPrice = useSelector((state) => state.counter.cursorPrice);
  const grandMaCount = useSelector((state) => state.counter.grandMa);
  const grandMaPrice = useSelector((state) => state.counter.grandMaPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cursorCount > 0) {
      const interval = setInterval(() => {
        dispatch(incrementByAmount(cursorCount ));
        if (grandMaCount > 0) {
          dispatch(incrementByAmount(grandMaCount * 5));
        }
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }
  }, [dispatch, cursorCount, grandMaCount])

  const handleBuyCursor = () => {
    if (cursorPrice <= cookieCount) {
      dispatch(incrementCursor())
    }
  }

  const handleBuyGrandma = () => {
    if (grandMaPrice <= cookieCount) {
      dispatch(incrementGrandma())
    }
  }

  const bakeCookie = () => {
    dispatch(increment())
  }

  return (
    <div className="App">
      <Cookie cookieCount={cookieCount} bakeCookie={bakeCookie}></Cookie>
      <Item count={cursorCount} price={cursorPrice} type={'cursor'} buyItem={handleBuyCursor}></Item>
      <Item count={grandMaCount} price={grandMaPrice} type={'grandMa'} buyItem={handleBuyGrandma}></Item>
      {/* <Item count={gameValues.grandMa.count} price={gameValues.grandMa.price} type={'grandMa'} buyItem={handleBuyItem}></Item>
      <Item count={gameValues.grandMa.count} price={gameValues.grandMa.price} type={'grandMa'} buyItem={handleBuyItem}></Item>
      <Item count={gameValues.grandMa.count} price={gameValues.grandMa.price} type={'grandMa'} buyItem={handleBuyItem}></Item> */}
    </div>
  );
}

export default App;
