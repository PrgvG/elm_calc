import React from "react";

function InputText(props) {
  return (
    <div className={props.styles}>
      {props.title}<input onChange={(e) => props.set(e.target.value)} />
    </div>
  );
}

export default InputText;
