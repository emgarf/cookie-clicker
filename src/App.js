import './App.css';
import Cookie from './Components/Cookie.js';
import Item from './Components/Item.js';
import { useEffect, useState } from 'react';

function App() {
  const [gameValues, setGameValues] = useState(
    {
      cookieCount: 0,
      cursor: {
        count: 0, 
        price: 1,
        cps: 1,
      },
      grandMa: {
        count: 0, 
        price: 100,
        cps: 5,
      },
    }
  );
  const [ready, setReady] = useState(true);

  useEffect(() => {
      if (gameValues.cursor.count > 0 && ready === true) {
        setReady(false);
        setGameValues(prevState => ({
          ...prevState,
          cookieCount: prevState.cookieCount + prevState.cursor.count
        }));
        setTimeout(() => {setReady(true)}, 1500)
      }
  }, [gameValues.cookieCount, gameValues.cursor.count, ready])

  const handleBuyItem = (type) => {
    if (gameValues[type].price <= gameValues.cookieCount) {
      setGameValues(prevState => ({
        ...prevState,
        cookieCount: prevState.cookieCount - prevState[type].price,
        [type]: {
          ...prevState[type],
          count: prevState[type].count + 1,
          price: Math.ceil(prevState[type].price * 1.3),
        },
      }));
    }
  }

  const bakeCookie = () => {
    setGameValues(prevState => ({
      ...prevState,
      cookieCount: prevState.cookieCount + 1
    }))
  }

  return (
    <div className="App">
      <Cookie cookieCount={gameValues.cookieCount} bakeCookie={bakeCookie}></Cookie>
      <Item count={gameValues.cursor.count} price={gameValues.cursor.price} type={'cursor'} buyItem={handleBuyItem}></Item>
      <Item count={gameValues.grandMa.count} price={gameValues.grandMa.price} type={'grandMa'} buyItem={handleBuyItem}></Item>
    </div>
  );
}

export default App;
