import React from "react"
import "./ResultCards.css"

function ResultCards({ elements }) {
  return (
    <form>
      {elements.map((it, i) => {
        return (
          <div className="cards-container" key={it.title + i}>
            <legend className="cards-container__legend">{it.title}</legend>
            {it.array.map((it, i) => {
              return (
                (it.C2 || it.T2) && (
                  <div className="card" key={`${i}`}>
                    <div className="card__title">
                      {it.title} ({it.CW}x{it.CD}) <br />
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
