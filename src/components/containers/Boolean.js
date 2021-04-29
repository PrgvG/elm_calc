import React from "react"
import { useDispatch } from "react-redux"

import Button from "../presentationals/Button"

import { updateShaft } from "../../redux/reducers/shaft"
import { updateCWT } from "../../redux/reducers/counterWeight"

function InputBoolean({ shaft, cwt }) {
  const dispatch = useDispatch()
  const wallToShaftDoorHandler = () => dispatch(updateShaft("wallToShaftDood", shaft.wallToShaftDood === 60 ? 35 : 60))
  const cwtToWallHandler = () => dispatch(updateShaft("cwtToWall", shaft.cwtToWall === 50 ? 25 : 50))
  const cwtDepthHandler = () => dispatch(updateCWT("depth", cwt.depth === 180 ? 130 : 180))
  const cwtWidthHandler = () => dispatch(updateCWT("width", cwt.width === 900 ? 450 : 900))
  const wtHandler = () => dispatch(updateShaft("walkThrough", !shaft.walkThrough))
  const guideHandler = () => dispatch(updateShaft("guide", shaft.guide === 75 ? 62 : 75))

  const elements = [
    {
      title: "от стены до порога 35 мм",
      handler: wallToShaftDoorHandler,
      equals: shaft.wallToShaftDood === 35,
      disabled: false,
    },
    {
      title: "от оборудования до стен 25 мм",
      handler: cwtToWallHandler,
      equals: shaft.cwtToWall === 25,
      disabled: false,
    },
    {
      title: "противовес глубиной 130 мм",
      handler: cwtDepthHandler,
      equals: cwt.depth === 130,
      disabled: shaft.load === 1000,
    },
    { title: "противовес шириной 450 мм", handler: cwtWidthHandler, equals: cwt.width === 450, disabled: shaft.load !== 400 },
    {
      title: "направляющая T89/В",
      handler: guideHandler,
      equals: shaft.guide === 62,
      disabled: shaft.load !== 630,
    },
    { title: "проходная", handler: wtHandler, equals: shaft.walkThrough, disabled: false },
  ]

  return <Button elements={elements} />
}

export default InputBoolean
