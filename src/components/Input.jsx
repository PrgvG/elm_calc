import React from "react";

function Input(props) {
  return (
    <fieldset>
      <legend>{props.title}</legend>
      {props.arr.map((it, i) => {
        return (
          <div className="form_radio_btn" key={i}>
            <input
              type={it.type}
              id={it.id}
              name={it.name}
              value={it.value}
              onClick={() => props.set(it.value)}
              disabled={
                props.sta === "disable" && it.value === 1000 ? true : false
              }
            />
            <label for={it.id}>{it.label}</label>
          </div>
        );
      })}
    </fieldset>
  );
}

export default Input;
