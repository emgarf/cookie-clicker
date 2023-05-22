import './App.css';
import Cookie from './Components/Cookie.js';
import Cursor from './Components/Cursor.js';
import Grandma from './Components/Grandma.js';
import { useEffect, useState } from 'react';

function App() {
  const [gameValues, setGameValues] = useState(
    {
      cookieCount: 0, 
      cursorCount: 0, 
      cursorPrice: 1,
      grandmaCount: 0, 
      grandmaPrice: 100
    }
  );
  const [ready, setReady] = useState(true);

  useEffect(() => {
      if (gameValues.cursorCount > 0 && ready === true) {
        setReady(false);
        setGameValues(prevState => ({
          ...prevState,
          cookieCount: gameValues.cookieCount + gameValues.cursorCount
        }));
        setTimeout(() => {setReady(true)}, 1500)
      }
  }, [setGameValues, gameValues.cookieCount, gameValues.cursorCount, ready])

  return (
    <div className="App">
      <Cookie setGameValues={setGameValues} gameValues={gameValues}></Cookie>
      <Cursor setGameValues={setGameValues} gameValues={gameValues}></Cursor>
      <Grandma setGameValues={setGameValues} gameValues={gameValues}></Grandma>
    </div>
  );
}

export default App;
