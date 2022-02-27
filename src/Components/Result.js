import React from "react";
import Styles from "./Result.module.css";
const result = (props) => {
  return (
    <div>
      <input
        className={Styles.button}
        type="text"
        name="cal"
        id="cal"
        value={props.value}
      />
    </div>
  );
};

export default result;
