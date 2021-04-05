import React from "react";

function Input(props) {
  return (
    <fieldset className="filter-form">
      <legend className="filter-form__legend">{props.title}</legend>
      {props.arr.map((it, i) => {
        return (
          <div className="filter-form__radio" key={i}>
            <input
              type="radio"
              id={it.id}
              name={it.name}
              value={it.value}
              onClick={props.handler}
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
