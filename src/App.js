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
  const [SW, setSW] = useState(0); // SW - shaft width
  const [SD, setSD] = useState(0); // SD - shaft depth
  const [head, setHead] = useState(Number);
  const [height, setHeight] = useState(Number);
  const [pit, setPit] = useState(Number);
  const [shaft, setShaft] = useState("");
  const [load, setLoad] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [deepen, setDeepen] = useState(false);
  const [through, setThrough] = useState(false);

  const A_HEAD = 2950 + speed;
  const B_HEAD = 3050 + speed;
  const C_HEAD = 3750 + speed;
  const D_HEAD = 3550 + speed;
  const A_PIT = 1050;
  const D_PIT = 1400;
  const HEAD_AND_PIT = 4450;
  const MIN_CAR_BRACKET = 35;
  const MAX_CAR_BRACKET = 245;
  const MIN_CWT_BRACKET = 230;
  const MAX_CWT_BRACKET = 550;
  const BACK = through ? 35 : 330;

  const PORTAL_DEPTH = deepen ? 20 : 55;
  const C2 = through ? PORTAL_DEPTH * 2 + 380 : PORTAL_DEPTH + 265;
  const T2 = through ? PORTAL_DEPTH * 2 + 440 : PORTAL_DEPTH + 325;

  const redHead = (n) => {
    if (load === 1000)
      return n < D_HEAD && n > 0 ? "ShaftInput Red" : "ShaftInput";
    if (shaft !== "mr" && height > 40)
      return n < C_HEAD && n > 0 ? "ShaftInput Red" : "ShaftInput";
    if (shaft !== "mr" && height < 40)
      return n < B_HEAD && n > 0 ? "ShaftInput Red" : "ShaftInput";
    return n < A_HEAD && n > 0 ? "ShaftInput Red" : "ShaftInput";
  };
  const redPit = (n) => {
    if (shaft === "mr" && +n + +head < HEAD_AND_PIT && +n !== 0 && +head !== 0)
      return "ShaftInput Red";
    if (load === 1000)
      return n < D_PIT && n > 0 ? "ShaftInput Red" : "ShaftInput";
    return n < A_PIT && n > 0 ? "ShaftInput Red" : "ShaftInput";
  };
  function guide(load) {
    return load === 400 ? 65 : load === 630 ? 62 : 75;
  }
  return (
    <div className="App">
      <div className="Container">
        <form className="Sub_container">
          <fieldset>
            <legend>Шахта</legend>
            <InputText set={setSW} styles="ShaftInput" title="Ширина, мм: " />
            <InputText set={setSD} styles="ShaftInput" title="Глубина, мм: " />
            <InputText
              set={setHead}
              styles={redHead(head)}
              title="Оголовок, мм: "
              type=""
            />
            <InputText
              set={setPit}
              styles={redPit(pit)}
              title="Приямок, мм: "
              type=""
            />
            <div className="ShaftInput">
              Заглубить ДШ
              <input
                type="checkbox"
                style={{ width: 50 }}
                onChange={() => setDeepen(!deepen)}
              />
            </div>
            <div className="ShaftInput">
              Проходная
              <input
                type="checkbox"
                style={{ width: 50 }}
                onChange={() => setThrough(!through)}
              />
            </div>
          </fieldset>
          <Input set={setShaft} sta="" arr={shaftArr} title="Тип" />
          <Input
            set={setLoad}
            sta={shaft === "mr" ? "disable" : ""}
            arr={loadArr}
            title="Грузоподъемность"
          />
          <Input set={setSpeed} sta="" arr={speedArr} title="Скорость" />
          <Input
            set={setHeight}
            sta=""
            arr={heightArr}
            title="Высота подъема"
          />
        </form>
        <form className="Sub_container">
          <fieldset style={{ height: "100%" }}>
            <legend>Результаты</legend>
            {shaft === "mr" &&
              SD.length > 0 &&
              SW.length > 0 &&
              through !== true && (
                <ResultList
                  title="Противовес сзади:"
                  arr={cabinArr.filter(
                    (it) => it.load === load && it.type === "normal"
                  )}
                  w1={MIN_CAR_BRACKET * 2}
                  w2={MAX_CAR_BRACKET * 2}
                  T2={T2 + 180}
                  C2={C2 + 180}
                  SW={SW}
                  SD={SD}
                  back={BACK}
                  load={guide(load)}
                  doors={doorArr}
                />
              )}
            {SD.length > 0 && SW.length > 0 && (
              <ResultList
                title="Противовес сбоку:"
                arr={cabinArr.filter((it) => {
                  if (through) {
                    return it.load === load && it.type === "through";
                  }
                  return it.load === load && it.type === "normal";
                })}
                w1={MIN_CAR_BRACKET + MIN_CWT_BRACKET}
                w2={MAX_CAR_BRACKET + MAX_CWT_BRACKET}
                T2={T2}
                C2={C2}
                SW={SW}
                SD={SD}
                back={BACK}
                load={guide(load)}
                doors={doorArr}
              />
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;
