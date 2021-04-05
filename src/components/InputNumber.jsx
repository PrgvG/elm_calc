import React from "react";

function InputNumber({ value, onChange }) {

  const elements = [
    { name: "width", placeholder: "ширина шахты", value: value.width, style: "ShaftInput" },
    { name: "depth", placeholder: "глубина шахты", value: value.depth, style: "ShaftInput" },
    { name: "head", placeholder: "последний этаж", value: value.head, style: "ShaftInput" },
    { name: "pit", placeholder: "приямок", value: value.pit, style: "ShaftInput" },
  ];

  return (
    <fieldset className="filter-form">
      <legend className="filters-form__legend">Шахта</legend>
        {elements.map((it, i) => {
          return (
            <input
              key={`${i}-${it.name}`}
              type="Number"
              className={it.style}
              name={it.name}
              placeholder={it.placeholder}
              onChange={onChange}
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
