import React from "react"
import { useDispatch } from "react-redux"
import { updateShaft } from "../../redux/reducers/shaft"
import { updateCWT } from "../../redux/reducers/counterWeight"

import shaftType from "../../data/shaft"
import loadArr from "../../data/load"
import speedArr from "../../data/speed"
import heightArr from "../../data/height"
import Radio from "../presentationals/Radio"

function Switch({ shaft }) {
  const dispatch = useDispatch()
  const changeHandler = e => {
    if (e.target.name === "load") {
      switch (e.target.value) {
        case "630":
          dispatch(updateCWT("width", 900))
          dispatch(updateShaft("guide", 75))
          break
        case "1000":
          dispatch(updateCWT("width", 1100))
          dispatch(updateCWT("depth", 180))
          dispatch(updateShaft("guide", 75))
          break
        default:
          dispatch(updateShaft("guide", 65))
      }
    }
    dispatch(updateShaft(e.target.name, Number(e.target.value)))
  }

  const typeChangeHandler = e => {
    switch (e.target.value) {
      case "false":
        dispatch(updateShaft(e.target.name, false))
        break
      default:
        dispatch(updateShaft(e.target.name, true))
    }
    dispatch(updateShaft("load", null))
  }

  const elements = [
    { array: shaftType, handler: typeChangeHandler, disabled: false, title: "Тип", ref: shaft.machineRoom },
    { array: heightArr, handler: changeHandler, disabled: false, title: "Высота подъема", ref: shaft.height },
    { array: loadArr, handler: changeHandler, disabled: shaft.machineRoom, title: "Грузоподъемность", ref: shaft.load },
    { array: speedArr, handler: changeHandler, disabled: shaft.load !== "630", title: "Скорость", ref: shaft.speed },
  ]

  return <Radio elements={elements} />
}

export default Switch
