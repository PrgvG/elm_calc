import React from "react"
import "./ResultCards.css"

function ResultCards({ elements }) {
  return (
    <form className="result">
      {elements.map((item, i) => {
        if (item.array.length === 0) return null
        return (
          <div className="cards-container" key={item.title + i}>
            <legend className="cards-container__legend">{item.title}</legend>
            {item.array.map((it, i) => {
              return (
                (it.C2 || it.T2) && (
                  <div className="card" key={`${i}`}>
                    <div className="card__title">
                      {it.title} ({it.CW}x{it.CD}) <br />
                    </div>
                    <div className="card__body">
                      {it.T2 && `T2: ${it.T2}`}
                      {it.T2 && it.C2 && ", "}
                      {it.C2 && `C2: ${it.C2}`}
                    </div>
                  </div>
                )
              )
            })}
          </div>
        )
      })}
    </form>
  )
}
export default ResultCards
