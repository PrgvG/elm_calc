import React from "react";

function InputText(props) {
  return (
    <div className={props.styles}>
      {props.title}<input type={props.type} style={{width: 50}} onChange={(e) => props.set(e.target.value)} />
    </div>
  );
}

export default InputText;
