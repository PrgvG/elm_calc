import "./App.css";
import React, { useState } from "react";
import Input from "./components/Input.jsx";
import InputText from "./components/InputText.jsx";
import ResultList from "./components/ResultList.jsx";

import shaftArr from "./data/shaft.js";
import loadArr from "./data/load.js";
import cabinArr from "./data/cabin.js";
import speedArr from "./data/speed.js";
import heightArr from "./data/height.js";
import doorArr from "./data/door.js";

function App() {
  const [SW, setSW] = useState(Number); // SW - shaft width
  const [SD, setSD] = useState(Number); // SD - shaft depth
  const [head, setHead] = useState(Number);
  const [height, setHeight] = useState(Number);
  const [pit, setPit] = useState(Number);
  const [shaft, setShaft] = useState("");
  const [load, setLoad] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [toggle, setToggle] = useState(true);

  const a = 2100 + 40 + 1000 + speed;
  const b = 2100 + 40 + 700 + 100 + 121 + 100 + speed;
  const A_HEAD = 3300;
  const B_HEAD = 3400;
  const C_HEAD = 4100;
  const D_HEAD = 3900;
  const A_PIT = 1050;
  const D_PIT = 1400;
  const HEAD_AND_PIT = 4450;
  const MIN_CAR_BRACKET = 35;
  const MAX_CAR_BRACKET = 245;
  const MIN_CWT_BRACKET = 230;
  const MAX_CWT_BRACKET = 550;

  const redHead = (n) => {
    if (load === 1000)
      return n < D_HEAD && n > 0 ? "ShaftInput Red" : "ShaftInput";
    if (shaft !== "mr" && height >= 40)
      return n < C_HEAD && n > 0 ? "ShaftInput Red" : "ShaftInput";
    if (shaft !== "mr" && height <= 40)
      return n < B_HEAD && n > 0 ? "ShaftInput Red" : "ShaftInput";
    return n < A_HEAD && n > 0 ? "ShaftInput Red" : "ShaftInput";
  };
  const redPit = (n) => {
    if (shaft === "mr" && +n + +head < HEAD_AND_PIT) return "ShaftInput Red";
    if (load === 1000)
      return n < D_PIT && n > 0 ? "ShaftInput Red" : "ShaftInput";
    return n < A_PIT && n > 0 ? "ShaftInput Red" : "ShaftInput";
  };

  return (
    <div className="App">
      <div className="App-body">
        <form className="Body-container">
          <div className="Container-radio">
            <Input set={setShaft} arr={shaftArr} title="Тип шахты" />
            <Input
              set={setLoad}
              arr={loadArr.filter((it) =>
                shaft === "mr" ? it.value !== 1000 : it.value
              )}
              title="Грузоподъемность"
            />
            <Input set={setSpeed} arr={speedArr} title="Скорость" />
            <Input set={setHeight} arr={heightArr} title="Высота подъема" />
          </div>
          <fieldset className="Container-input">
            <legend>Параметры шахты</legend>
            <InputText set={setSW} styles="ShaftInput" title="Ширина, мм: " />
            <InputText set={setSD} styles="ShaftInput" title="Глубина, мм: " />
            <InputText
              set={setHead}
              styles={redHead(head)}
              title=" Последний этаж, мм: "
            />
            <InputText
              set={setPit}
              styles={redPit(pit)}
              title="Приямок, мм: "
            />
          </fieldset>
          <button
            type="button"
            onClick={(e) => {
              setToggle(!toggle);
            }}
          >
            toggle
          </button>
        </form>
        {toggle && (
          <div className="Body-result">
            <fieldset>
              <legend>Результаты</legend>
              {shaft === "mr" && (
                <ResultList
                  title="Противовес сзади:"
                  arr={cabinArr.filter((it) => it.load === load)}
                  w1={MIN_CAR_BRACKET * 2}
                  w2={MAX_CAR_BRACKET * 2}
                  T2={560}
                  C2={500}
                  SW={SW}
                  SD={SD}
                  load={load}
                  doors={doorArr}
                />
              )}
              <ResultList
                title="Противовес сбоку:"
                arr={cabinArr.filter((it) => it.load === load)}
                w1={MIN_CAR_BRACKET + MIN_CWT_BRACKET}
                w2={MAX_CAR_BRACKET + MAX_CWT_BRACKET}
                T2={380}
                C2={320}
                SW={SW}
                SD={SD}
                load={load}
                doors={doorArr}
              />
            </fieldset>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
