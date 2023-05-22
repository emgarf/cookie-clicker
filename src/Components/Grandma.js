function Grandma({setGameValues, gameValues}) {
  const buy = () => {
    if (gameValues.grandmaPrice <= gameValues.cookieCount) {
      setGameValues(prevState => ({
        ...prevState,
        cookieCount: gameValues.cookieCount - gameValues.grandmaPrice,
        grandmaCount: gameValues.grandmaCount + 1,
        grandmaPrice: Math.ceil(gameValues.grandmaPrice * 1.8),
      }));
    }
  }

  return (
    <div>
      Price: {gameValues.grandmaPrice}
      <button onClick={() => buy()}>Buy a Grandma</button>
      You have {gameValues.grandmaCount} Grandmas.
    </div>
  );
}

export default Grandma;
