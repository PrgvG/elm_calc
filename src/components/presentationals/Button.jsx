import React from "react"
import "./Button.css"

function Button({ elements }) {
  return (
    <div className="button-container">
      {elements.map((it, i) => {
        return (
          <button className={`button ${it.equals ? "button--active" : ""}`} type="button" key={`${i}-${it.title}`} onClick={it.handler} disabled={it.disabled}>
            {it.title}
          </button>
        )
      })}
    </div>
  )
}

export default Button
