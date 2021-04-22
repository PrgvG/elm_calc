import React from "react"
import Input from "../presentationals/Input"
import { useDispatch } from "react-redux"
import { updateShaft } from "../../redux/reducers/shaft"

function InputNumber({ shaft }) {
  const A_HEAD = 3245 + shaft.speed
  const B_HEAD = 3245 + shaft.speed
  const C_HEAD = 3945 + shaft.speed
  const D_HEAD = 3745 + shaft.speed
  const A_PIT = 1050
  const D_PIT = 1400
  const HEAD_AND_PIT = 4450

  const coloderRed = {
    color: "rgb(200, 0, 0)",
    borderBottom: "1px solid rgb(200, 0, 0)",
  }
  const coloderGreen = {
    color: "rgb(0, 125, 0)",
  }

  const head = n => {
    if (shaft.type === "mr" && n < A_HEAD && n > 0) return coloderRed
    if (shaft.type !== "mr" && n > 0) {
      if (shaft.load === 1000 && n < D_HEAD) return coloderRed
      if (shaft.load !== 1000 && n < C_HEAD && shaft.height > 40) return coloderRed
      if (shaft.load !== 1000 && n < B_HEAD && shaft.height < 40) return coloderRed
    }
    return n > 0 ? coloderGreen : null
  }

  const pit = n => {
    if (n + shaft.head < HEAD_AND_PIT && n > 0 && shaft.head > 0) return coloderRed
    if (shaft.load === 1000 && n < D_PIT && n > 0) return coloderRed
    if (n < A_PIT && n > 0) return coloderRed
    return n > 0 ? coloderGreen : null
  }

  const dispatch = useDispatch()
  const changeHandler = e => dispatch(updateShaft(e.target.name, e.target.value))
  const elements = [
    {
      title: "width",
      placeholder: "ширина шахты, мм",
      value: shaft.width,
      handler: changeHandler,
    },
    {
      title: "depth",
      placeholder: "глубина шахты, мм",
      value: shaft.depth,
      handler: changeHandler,
    },
    {
      title: "head",
      placeholder: "последний этаж, мм",
      value: shaft.head,
      handler: changeHandler,
      warning: head(shaft.head),
    },
    {
      title: "pit",
      placeholder: "приямок, мм",
      value: shaft.pit,
      handler: changeHandler,
      warning: pit(shaft.pit),
    },
  ]

  return <Input elements={elements} />
}

export default InputNumber
