import React from "react";

function Input(props) {
  return (
    <div>
      <label>
        {props.label}
        <input type={props.type} onChange={props.handlechange}></input>
      </label>
    </div>
  );
}

export default Input;
