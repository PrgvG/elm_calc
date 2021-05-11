import React from "react"
import "./Radio.css"

function Radio({ elements }) {
  return (
    <>
      {elements.map((item, i) => {
        return (
          <div key={`${i}`} className="radio_container">
            {item.array.map((it, i) => {
              return (
                <div className="radio" key={`${i - 1}${it.name}`}>
                  <input
                    className="radio__input"
                    type="radio"
                    id={it.id}
                    name={it.name}
                    value={it.value}
                    onChange={item.handler}
                    disabled={item.disabled && it.value === 1000 ? true : false}
                    checked={it.value === item.ref}
                  />
                  <label className="radio__label" for={it.id}>
                    {it.label}
                  </label>
                </div>
              )
            })}
          </div>
        )
      })}
    </>
  )
}

export default Radio
