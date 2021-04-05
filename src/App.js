import "./App.css";
import React from "react";
import { useSelector, useDispatch } from 'react-redux'  
import { updateShaft, updateType } from './redux/reducers/shaft'  

import Input from "./components/Input.jsx";
import InputNumber from "./components/InputNumber.jsx";
import InputBoolean from "./components/InputBoolean.jsx";
import ResultList from "./components/ResultList.jsx";
import Header from "./components/Header";

import shaftType from "./data/shaft";
import loadArr from "./data/load.js";
import cabinArr from "./data/cabin.js";
import speedArr from "./data/speed.js";
import heightArr from "./data/height.js";
import doorArr from "./data/door.js";

function App() {
  const shaft = useSelector((s) => s.shaft)  
  const dispatch = useDispatch()  
  const changeHandler = (e) => dispatch(updateShaft(e.target.name, e.target.value))
  const typeChangeHandler = (e) => dispatch(updateType(e.target.name, e.target.value))

  function guide(load) {
    return load === 400 ? 65 : load === 630 ? shaft.guide : 75;
  }

  function filterCabin(arr, type) {
    const cabinType = type ? "through" : "normal"
    return arr.filter((it) => it.type === cabinType);
  }

  const MIN_CAR_BRACKET = 35;
  const MAX_CAR_BRACKET = 245;
  const MIN_CWT_BRACKET = shaft.cwtToWall + shaft.cwtDepth / 2 + 145;
  const MAX_CWT_BRACKET = 550;

  const BACK = shaft.walkThrough ? 135 : 1000;
  const C2 = shaft.walkThrough ? shaft.wallToShaftDood * 2 + 360 : shaft.wallToShaftDood + 255;
  const T2 = C2 + (shaft.walkThrough ? 140 : 70);

  const sideCWT = cabinArr.filter((it) =>
    it.load === shaft.load &&
    it.BG <= shaft.width - (MIN_CAR_BRACKET + MIN_CWT_BRACKET) - guide(shaft.load) * 2 &&
    it.BG >= shaft.width - (MAX_CAR_BRACKET + MAX_CWT_BRACKET) - guide(shaft.load) * 2 &&
    it.CD <= shaft.depth - C2
  )

  const backCWT = cabinArr.filter((it) =>
    it.load === shaft.load &&
    it.BG <= shaft.width - (MIN_CAR_BRACKET + MIN_CAR_BRACKET) - guide(shaft.load) * 2 &&
    it.BG >= shaft.width - (MAX_CAR_BRACKET + MAX_CAR_BRACKET) - guide(shaft.load) * 2 &&
    it.CD <= shaft.depth - C2
  )

  const cabinBackCWT = filterCabin(backCWT, shaft.walkThrough)
  const cabinSideCWT = filterCabin(sideCWT, shaft.walkThrough)

  return (
    <div className="container">
      <Header />
      {3371 + shaft.speed}
      <form className="container__part">
        <InputNumber value={shaft} handler={changeHandler} />
        <Input handler={typeChangeHandler} sta="" arr={shaftType} title="Тип" />
        <Input handler={changeHandler} sta={shaft.type === "mr" ? "disable" : ""} arr={loadArr} title="Грузоподъемность" />
        <Input handler={changeHandler} sta="" arr={speedArr} title="Скорость" />
        <Input handler={changeHandler} sta="" arr={heightArr} title="Высота подъема" />
        <InputBoolean />
      </form>
      <form className="container__part">
        <fieldset className="filter-form">
          <legend className="filter-form__legend">Результаты</legend>
          {shaft.type !== "mrl" &&
            shaft.walkThrough === false &&
            shaft.depth > 0 &&
            shaft.width > 0 && (
              <ResultList
                title="Противовес сзади:"
                cabinArr={cabinBackCWT}
                doorArr={doorArr}
                T2={T2}
                C2={C2}
                SW={shaft.width}
                SD={shaft.depth}
                back={330 + shaft.cwtDepth + shaft.cwtToWall}
                load={guide(shaft.load)}
              />
            )}
          {shaft.depth > 0 && shaft.width > 0 && (
            <ResultList
              title="Противовес сбоку:"
              cabinArr={cabinSideCWT}
              doorArr={doorArr}
              T2={T2}
              C2={C2}
              SW={shaft.width}
              SD={shaft.depth}
              back={BACK}
              load={guide(shaft.load)}
            />
          )}
        </fieldset>
      </form>
    </div>
  );
}

export default App;
