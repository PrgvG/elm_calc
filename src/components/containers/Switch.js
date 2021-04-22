import React from "react"
import { useDispatch } from "react-redux"
import { updateShaft, updateType } from "../../redux/reducers/shaft"

import shaftType from "../../data/shaft"
import loadArr from "../../data/load"
import speedArr from "../../data/speed"
import heightArr from "../../data/height"
import Radio from "../presentationals/Radio"

function Switch({ shaft }) {
  const dispatch = useDispatch()
  const changeHandler = e => dispatch(updateShaft(e.target.name, e.target.value))
  const typeChangeHandler = e => dispatch(updateType(e.target.name, e.target.value))

  const elements = [
    { array: shaftType, handler: typeChangeHandler, disabled: false, title: "Тип" },
    { array: heightArr, handler: changeHandler, disabled: false, title: "Высота подъема" },
    { array: loadArr, handler: changeHandler, disabled: shaft.type === "mr" ? true : false, title: "Грузоподъемность" },
    { array: speedArr, handler: changeHandler, disabled: false, title: "Скорость" },
  ]

  return <Radio elements={elements} />
}

export default Switch
