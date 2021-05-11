import React from "react"
import "./Input.css"

function Input({ elements }) {
  return (
    <>
      <div className="input-container">
        {elements.map((it, i) => {
          return (
            <input
              key={`${i}-${it.name}`}
              type="Number"
              className="input"
              style={it.warning}
              name={it.title}
              placeholder={it.placeholder}
              onChange={it.handler}
              value={it.value > 0 ? it.value : ""}
              min="0"
              step="50"
            />
          )
        })}
      </div>
    </>
  )
}

export default Input
