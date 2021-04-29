import React from "react"

function Modal(props) {
  const shaftCSS = {
    backgroundColor: "white",
    width: `${props.shaft.width / 10}px`,
    height: `${props.shaft.depth / 10}px`,
  }
  const cabinCSS = {
    backgroundColor: "gray",
    width: `${props.shaft.cabin.cabinWidth / 10}px`,
    height: `${props.shaft.cabin.cabinDepth / 10}px`,
  }
  const doorCSS = {
    backgroundColor: "green",
    width: `${props.shaft.cabin.cabinWidth / 10}px`,
    height: `${props.C2 / 10}px`,
  }
  if (!props.shaft.modal) {
    return null
  }
  return (
    <div className="modal" onClick={cabinHandle}>
      <div style={shaftCSS} onClick={e => e.stopPropagation()}>
        <div className="modal__header"></div>
        <div style={cabinCSS}>
          {props.shaft.cabin.cabinWidth}x{props.shaft.cabin.cabinDepth}
        </div>
        <div style={doorCSS}></div>
      </div>
    </div>
  )
}

export default Modal
