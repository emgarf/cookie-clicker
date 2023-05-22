function Cookie({setGameValues, gameValues}) {
  const buy = () => {
    if (gameValues.cursorPrice <= gameValues.cookieCount) {
      setGameValues(prevState => ({
        ...prevState,
        cookieCount: gameValues.cookieCount - gameValues.cursorPrice,
        cursorCount: gameValues.cursorCount + 1,
        cursorPrice: Math.ceil(gameValues.cursorPrice * 1.3),
      }));
    }
  }

  return (
    <div>
      Price: {gameValues.cursorPrice}
      <button onClick={() => buy()}>Buy a cursor</button>
      You have {gameValues.cursorCount} cursors.
    </div>
  );
}

export default Cookie;
