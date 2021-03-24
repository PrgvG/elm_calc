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
  console.log(typeof SD, typeof SW);
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
            />
            <InputText
              set={setPit}
              styles={redPit(pit)}
              title="Приямок, мм: "
            />
          </fieldset>
          <Input set={setShaft} arr={shaftArr} title="Тип" />
          <Input
            set={setLoad}
            arr={loadArr.filter((it) =>
              shaft === "mr" ? it.value !== 1000 : it.value
            )}
            title="Грузоподъемность"
          />
          <Input set={setSpeed} arr={speedArr} title="Скорость" />
          <Input set={setHeight} arr={heightArr} title="Высота подъема" />
        </form>
        <form className="Sub_container">
          <fieldset style={{ height: "100%" }}>
            <legend>Результаты</legend>
            {shaft === "mr" && SD != 0 && SW != 0 && (
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
            {SD != 0 && SW != 0 && (
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
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;
