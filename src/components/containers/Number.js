import React from "react";
import NumInp from "../presentationals/NumInp";
import { useDispatch } from 'react-redux'  
import { updateShaft } from '../../redux/reducers/shaft'  

function InputNumber({ value }) {

  const dispatch = useDispatch()  
  const changeHandler = (e) => dispatch(updateShaft(e.target.name, e.target.value))
  const elements = [
    {
      name: "width",
      placeholder: "ширина шахты",
      value: value.width,
      style: "filter-form__input",
      handler: changeHandler,
    },
    {
      name: "depth",
      placeholder: "глубина шахты",
      value: value.depth,
      style: "filter-form__input",
      handler: changeHandler,
    },
    {
      name: "head",
      placeholder: "последний этаж",
      value: value.head,
      style: "filter-form__input",
      handler: changeHandler,
    },
    {
      name: "pit",
      placeholder: "приямок",
      value: value.pit,
      style: "filter-form__input",
      handler: changeHandler,
    },
  ];

  return <NumInp elements={elements} />;
}

export default InputNumber;
