import React from "react";
import { useDispatch, useSelector } from "react-redux";

import BoolBtn from "../presentationals/BoolBtn";

import {
  updateWT,
  updateCWTdepth,
  updateCWTtoWall,
  updateWallToShaftDoor,
  updateGuide,
} from "../../redux/reducers/shaft";

function InputBoolean() {
  const dispatch = useDispatch();
  const shaft = useSelector((s) => s.shaft);
  const wallToShaftDoorHandler = () => dispatch(updateWallToShaftDoor("wallToShaftDood"));
  const cwtToWallHandler = () => dispatch(updateCWTtoWall("cwtToWall"));
  const cwtDepthHandler = () => dispatch(updateCWTdepth("cwtDepth"));
  const wtHandler = () => dispatch(updateWT("walkThrough"));
  const guideHandler = () => dispatch(updateGuide("guide"));

  const elements = [
    {
      title: "от стены до порога 35мм",
      handler: wallToShaftDoorHandler,
      equals: shaft.wallToShaftDood === 35,
    },
    {
      title: "от противовеса до стены 25мм",
      handler: cwtToWallHandler,
      equals: shaft.cwtToWall === 25,
    },
    {
      title: "применить 130 противовес",
      handler: cwtDepthHandler,
      equals: shaft.cwtDepth === 130,
    },
    {
      title: "применить Т89 направляющую",
      handler: guideHandler,
      equals: shaft.guide === 62,
    },
    { title: "проходная", handler: wtHandler, equals: shaft.walkThrough },
  ];

  return <BoolBtn elements={elements} />;
}

export default InputBoolean;
