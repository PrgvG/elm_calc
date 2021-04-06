import React from "react";

function NumInp({elements}) {
  return (
    <div className="filter-form">
      {elements.map((it, i) => {
        return (
          <input
            key={`${i}-${it.name}`}
            type="Number"
            className={it.style}
            name={it.name}
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
