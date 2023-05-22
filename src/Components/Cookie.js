import React from "react"

function Cookie({cookieCount, bakeCookie}) {
  return (
    <div>
      You have {cookieCount} cookies.

      <button onClick={() => bakeCookie()}>Click me</button>
    </div>
  );
}

export default React.memo(Cookie);
