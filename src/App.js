import "./App.css";
import React from "react";
import { useSelector, useDispatch } from 'react-redux'  
import { updateShaft, updateType, updateBool } from './redux/reducers/shaft'  

import Input from "./components/Input.jsx";
import InputNumber from "./components/InputNumber.jsx";
import InputBoolean from "./components/InputBoolean.jsx";
import ResultList from "./components/ResultList.jsx";

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
  const boolChangeHandler = (e) => dispatch(updateBool(e.target.name, !shaft[e.target.name]))


  const MIN_CAR_BRACKET = 35;
  const MAX_CAR_BRACKET = 245;
  const MIN_CWT_BRACKET = shaft.cwtToWall + shaft.cwtDepth / 2 + 145;
  const MAX_CWT_BRACKET = 550;
  const NORMAL = "normal";
  const THROUGH = "through";

  const BACK = shaft.walkThrough ? 135 : 1000;
  const C2 = shaft.walkThrough ? shaft.wallToShaftDood * 2 + 360 : shaft.wallToShaftDood + 255; // выставляем минимальный размер ДШ для обычной и для проходной кабины, центральное открывание
  const T2 = C2 + (shaft.walkThrough ? 140 : 70);

  // console.log( C2 + (shaft.walkThrough ? 140 : 70) )

  // const C2_new = shaft.cwtToWall + shaft.cwtDepth + 315 // 50 + 25 + 35 + 55 + 35 + 55 + 60 


  // направляющая от г/п
  function guide(load) {
    return load === 400 ? 65 : load === 630 ? shaft.guide : 75;
  }

  // отфильтруем массив кабин по типу купе и по размерам шахты
  function cabinType(arr, SW, SD, C2, minWidth, maxWidth, guideWidth, type) {
    if (type === "through") {
      return arr.filter(
        (it) =>
          it.load === shaft.load &&
          it.type === "through" &&
          it.BG <= SW - minWidth - guideWidth * 2 &&
          it.BG >= SW - maxWidth - guideWidth * 2 &&
          it.CD <= SD - C2
      );
    }
    if (type === "normal") {
      return arr.filter(
        (it) =>{
          return it.load === shaft.load &&
          it.type === "normal" &&
          it.BG <= SW - minWidth - guideWidth * 2 &&
          it.BG >= SW - maxWidth - guideWidth * 2 &&
          it.CD <= SD - C2
        });
    }
  }

  
  const cabinSideCWT = cabinType(
    cabinArr,
    shaft.width,
    shaft.depth,
    C2,
    MIN_CAR_BRACKET + MIN_CWT_BRACKET,
    MAX_CAR_BRACKET + MAX_CWT_BRACKET,
    guide(shaft.load),
    NORMAL
  );
  const throughtCabinSideCWT = cabinType(
    cabinArr,
    shaft.width,
    shaft.depth,
    C2,
    MIN_CAR_BRACKET + MIN_CWT_BRACKET,
    MAX_CAR_BRACKET + MAX_CWT_BRACKET,
    guide(shaft.load),
    THROUGH
  );
  const cabinBackCWT = cabinType(
    cabinArr,
    shaft.width,
    shaft.depth,
    C2,
    MIN_CAR_BRACKET + MIN_CAR_BRACKET,
    MAX_CAR_BRACKET + MAX_CAR_BRACKET,
    guide(shaft.load),
    NORMAL
  );
  return (
    <div className="container">
      <form className="container__part">
        <InputNumber value={shaft} onChange={changeHandler} />
        <InputBoolean value={shaft} onChange={boolChangeHandler} />
        <Input handler={typeChangeHandler} sta="" arr={shaftType} title="Тип" />
        <Input handler={changeHandler} sta={shaft.type === "mr" ? "disable" : ""} arr={loadArr} title="Грузоподъемность" />
        <Input handler={changeHandler} sta="" arr={speedArr} title="Скорость" />
        <Input handler={changeHandler} sta="" arr={heightArr} title="Высота подъема" />
      </form>
      <form className="container__part">
        <fieldset className="filter-form">
          <legend className="filters-form__legend">Результаты</legend>
          {shaft.type !== "mrl" &&
            shaft.walkThrough === false &&
            shaft.depth > 0 &&
            shaft.width > 0 && (
              <ResultList
                title="Противовес сзади:"
                cabinArr={cabinBackCWT}
                doorArr={doorArr}
                T2={T2 + shaft.cwtDepth + shaft.cwtToWall}
                C2={C2 + shaft.cwtDepth + shaft.cwtToWall}
                SW={shaft.width}
                SD={shaft.depth}
                back={330}
                load={guide(shaft.load)}
              />
            )}
          {shaft.walkThrough === false && shaft.depth > 0 && shaft.width > 0 && (
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
          {shaft.walkThrough === true && shaft.depth > 0 && shaft.width > 0 && (
            <ResultList
              title="Противовес сбоку:"
              cabinArr={throughtCabinSideCWT}
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
