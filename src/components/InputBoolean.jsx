import React from "react";

function InputBoolean(props) {
  return (
    <div className={props.styles}>
      {props.title}
      <input
        type={props.type}
        style={{ width: 50 }}
        onChange={() => props.set(!props.value)}
      />
    </div>
  );
}

export default InputBoolean;