import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateShaft, updateType } from "../../redux/reducers/shaft";

import shaftType from "../../data/shaft";
import loadArr from "../../data/load";
import speedArr from "../../data/speed";
import heightArr from "../../data/height";
import RadioInp from "../presentationals/RadioInp";

function Radio() {
  const dispatch = useDispatch();
  const shaft = useSelector((s) => s.shaft);
  const changeHandler = (e) => dispatch(updateShaft(e.target.name, e.target.value));
  const typeChangeHandler = (e) => dispatch(updateType(e.target.name, e.target.value));

    const elements = [
        { array: shaftType, handler: typeChangeHandler, state: "", title: "Тип" },
        { array: loadArr, handler: changeHandler, state: shaft.type === "mr" ? "disable" : "", title: "Грузоподъемность", },
        { array: speedArr, handler: changeHandler, state: "", title: "Скорость" },
        { array: heightArr, handler: changeHandler, state: "", title: "Высота подъема", },
      ];

  return (
      <RadioInp elements={elements} />
  );
}

export default Radio;
