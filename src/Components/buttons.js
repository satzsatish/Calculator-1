import React, { useState } from "react";
import Styles from "./buttons.module.css";
import Result from "./Result";
const Buttons = () => {
  const [calValue, setCalValue] = useState("");
  const numberHandler = (event) => {
    setCalValue(calValue + event.target.value);
  };
  return (
    <div>
      {<Result value={calValue} />}
      <div className={Styles.gridContainer}>
        <input
          className={Styles.gridItem}
          type="button"
          value="1"
          onClick={numberHandler}
        />
        <input
          className={Styles.gridItem}
          type="button"
          value="2"
          onClick={numberHandler}
        />
        <input
          className={Styles.gridItem}
          type="button"
          value="3"
          onClick={numberHandler}
        />
        <input
          className={Styles.gridItem}
          type="button"
          value="+"
          onClick={numberHandler}
        />
        <input
          className={Styles.gridItem}
          type="button"
          value="4"
          onClick={numberHandler}
        />
        <input
          className={Styles.gridItem}
          type="button"
          value="5"
          onClick={numberHandler}
        />
        <input
          className={Styles.gridItem}
          type="button"
          value="6"
          onClick={numberHandler}
        />
        <input
          className={Styles.gridItem}
          type="button"
          value="-"
          onClick={numberHandler}
        />
        <input
          className={Styles.gridItem}
          type="button"
          value="7"
          onClick={numberHandler}
        />
        <input
          className={Styles.gridItem}
          type="button"
          value="8"
          onClick={numberHandler}
        />
        <input
          className={Styles.gridItem}
          type="button"
          value="9"
          onClick={numberHandler}
        />
        <input
          className={Styles.gridItem}
          type="button"
          value="/"
          onClick={numberHandler}
        />
        <input
          className={Styles.gridItem}
          type="button"
          value="*"
          onClick={numberHandler}
        />
        <input
          className={Styles.gridItem}
          type="button"
          value="0"
          onClick={numberHandler}
        />
        <input
          className={Styles.gridItem}
          type="button"
          value="="
          onClick={() => setCalValue(eval(calValue))}
        />
        <input
          className={Styles.gridItem}
          type="button"
          value="AC"
          onClick={() => setCalValue("")}
        />
      </div>
    </div>
  );
};

export default Buttons;
