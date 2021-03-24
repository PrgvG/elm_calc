import React from "react";

function Input(props) {
  return (
    <fieldset>
      <legend>{props.title}</legend>
      {props.arr.map((it, i) => {
        return (
          <div className="Radio-input" key={i}>
            <input
              type={it.type}
              id={it.id}
              name={it.name}
              value={it.value}
              onClick={(e) => props.set(it.value)}
            />
            <label for={it.id}>{it.label}</label>
          </div>
        );
      })}
    </fieldset>
  );
}

export default Input;
