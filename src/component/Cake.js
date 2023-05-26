import React, { useState } from "react"
import styles from '../styles/cake.module.css'; 
import {useSelector, useDispatch} from 'react-redux'
import {increment} from '../cakeSlice'

function Cake() {
  const cakeCount = useSelector((state) => state.counter.cake);
  const dispatch = useDispatch();
  const [askii, setAskii] = useState(`|####|>o<|###|`);

  const askiiMovingParts = [`|####|>o<|###|`, `|####|u_u|###|`, `|####|x_x|###|`, `|####|v_v|###|`, `|####|-_-|###|`, `|####|T_T|###|`, `|####|ToT|###|`, `|####|U_U|###|`, `|####|"_"|###|`, `|####|"o"|###|`, `|####|V_V|###|`, `|####|VoV|###|`, `|####|<_<|###|`, `|####|>_>|###|`]

  const askii1 = `(^)(^)(^)(^)`;
  const askii2 = `_i__i__i__i_`;
  const askii3 = `(____________)`;
  const askii5 = `(____________)`;

  const bakeCake = () => {
    dispatch(increment())
    setAskii(askiiMovingParts[Math.floor(Math.random() * askiiMovingParts.length)]);
  }

  return (
    <div className={styles.globalCake}>
      You have {cakeCount} cakes. <br/>
      click on the cake below<br/>
      | <br/>
      | <br/>
      v
      <div onClick={() => bakeCake()} className={styles.cake}>
        <div> {askii1} </div>
        <div> {askii2} </div>
        <div> {askii3} </div>
        <div> {askii} </div>
        <div> {askii5} </div>
      </div>
    </div>
  );
}

export default React.memo(Cake);
