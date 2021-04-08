import React from "react";

function RadioInp({ elements }) {
  return (
    <>
      {elements.map((item, i) => {
        return (
          <div className={`filter-form filter__grid${i+2}`} key={`${i}`}>
            {item.array.map((it, i) => {
              return (
                <div className="filter-form__radio" key={`${i-1}${it.name}`}>
                  <input
                    type="radio"
                    id={it.id}
                    name={it.name}
                    value={it.value}
                    onClick={item.handler}
                    disabled={
                      item.state === "disable" && it.value === 1000
                        ? true
                        : false
                    }
                  />
                  <label for={it.id}>{it.label}</label>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default RadioInp;