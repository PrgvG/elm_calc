import React from "react"
import { useDispatch } from "react-redux"

import Button from "../presentationals/Button"

import { updateWT, updateCWTdepth, updateCWTtoWall, updateWallToShaftDoor, updateGuide } from "../../redux/reducers/shaft"

function InputBoolean({ shaft }) {
  const dispatch = useDispatch()
  const wallToShaftDoorHandler = () => dispatch(updateWallToShaftDoor("wallToShaftDood"))
  const cwtToWallHandler = () => dispatch(updateCWTtoWall("cwtToWall"))
  const cwtDepthHandler = () => dispatch(updateCWTdepth("cwtDepth"))
  const wtHandler = () => dispatch(updateWT("walkThrough"))
  const guideHandler = () => dispatch(updateGuide("guide"))

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
      equals: shaft.cwtDepth === 130,
      disabled: shaft.load === 1000 ? true : false,
    },
    {
      title: "направляющая T89/В",
      handler: guideHandler,
      equals: shaft.guide === 62,
      disabled: false,
    },
    { title: "проходная", handler: wtHandler, equals: shaft.walkThrough, disabled: false },
  ]

  return <Button elements={elements} />
}

export default InputBoolean
