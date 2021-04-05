import React from "react";

function InputNumber({ value, handler }) {

  const elements = [
    { name: "width", placeholder: "ширина шахты", value: value.width, style: "filter-form__input" },
    { name: "depth", placeholder: "глубина шахты", value: value.depth, style: "filter-form__input" },
    { name: "head", placeholder: "последний этаж", value: value.head, style: "filter-form__input" },
    { name: "pit", placeholder: "приямок", value: value.pit, style: "filter-form__input" },
  ];

  return (
    <fieldset className="filter-form">
      <legend className="filter-form__legend">Шахта</legend>
        {elements.map((it, i) => {
          return (
            <input
              key={`${i}-${it.name}`}
              type="Number"
              className={it.style}
              name={it.name}
              placeholder={it.placeholder}
              onChange={handler}
              value={it.value > 0 ? it.value : ""}
              min="0"
              step="50"
            />
          );
        })}
    </fieldset>
  );
}

export default InputNumber;
