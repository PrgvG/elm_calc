import React from "react";

function NumInp({elements}) {
  return (
    <div className="filter-form filter__grid1">
      {elements.map((it, i) => {
        return (
          <input
            key={`${i}-${it.name}`}
            type="Number"
            className="filter-form__input"
            style={it.warning}
            name={it.title}
            placeholder={it.placeholder}
            onChange={it.handler}
            value={it.value > 0 ? it.value : ""}
            min="0"
            step="50"
          />
        );
      })}
    </div>
  );
}

export default NumInp;
