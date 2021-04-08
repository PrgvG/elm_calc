import React from "react";

function BoolBtn({ elements }) {
  return (
    <div className="filter-form filter__grid6">
      {elements.map((it, i) => {
        return (
          <button
            className={`filter-form__btn ${ it.equals ? "filter-form__btn--active" : "" }`}
            type="button"
            key={`${i}-${it.title}`}
            onClick={it.handler}
          >
            {it.title}
          </button>
        );
      })}
    </div>
  );
}

export default BoolBtn;
