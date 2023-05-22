function Cookie({setGameValues, gameValues}) {
  const createCookie = () => {
    setGameValues(prevState => ({
      ...prevState,
      cookieCount: gameValues.cookieCount + 1
    }))
  }
  return (
    <div>
      You have {gameValues.cookieCount} cookies.

      <button onClick={() => createCookie()}>Click me</button>
    </div>
  );
}

export default Cookie;
