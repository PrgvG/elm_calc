import "./App.css";
import React, { useState } from "react";
import Input from "./components/Input.jsx";
import InputText from "./components/InputText.jsx";
import InputBoolean from "./components/InputBoolean.jsx";

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

  const A_HEAD = 2950 + 100 + 121 + 100 + speed;
  const B_HEAD = 3050 + 100 + 121 + 100 + speed;
  const C_HEAD = 3750 + 100 + 121 + 100 + speed;
  const D_HEAD = 3550 + 100 + 121 + 100 + speed;
  const A_PIT = 1050;
  const D_PIT = 1400;
  const HEAD_AND_PIT = 4450;
  const MIN_CAR_BRACKET = 35;
  const MAX_CAR_BRACKET = 245;
  const MIN_CWT_BRACKET = 230;
  const MAX_CWT_BRACKET = 550;
  const BACK = through ? 35 : 330;

  const PORTAL_DEPTH = deepen ? 20 : 55; // меняем размер, если можно утопить
  const C2 = through ? PORTAL_DEPTH * 2 + 380 : PORTAL_DEPTH + 265; // выставляем минимальный размер ДШ для обычной и для проходной кабины, центральное открывание
  const T2 = through ? PORTAL_DEPTH * 2 + 440 : PORTAL_DEPTH + 325; // выставляем минимальный размер ДШ для обычной и для проходной кабины, телескопическое открывание

  // условие при котором оголовок будет подсвечен красным
  const redHead = (n) => {
    if (load === 1000)
      return n < D_HEAD && n > 0 ? "ShaftInput Red" : "ShaftInput";
    if (shaft !== "mr" && height > 40)
      return n < C_HEAD && n > 0 ? "ShaftInput Red" : "ShaftInput";
    if (shaft !== "mr" && height < 40)
      return n < B_HEAD && n > 0 ? "ShaftInput Red" : "ShaftInput";
    return n < A_HEAD && n > 0 ? "ShaftInput Red" : "ShaftInput";
  };

  // условие при котором приямок будет подсвечен красным
  const redPit = (n) => {
    if (shaft === "mr" && n + head < HEAD_AND_PIT && n !== 0 && head !== 0)
      return "ShaftInput Red";
    if (load === 1000)
      return n < D_PIT && n > 0 ? "ShaftInput Red" : "ShaftInput";
    return n < A_PIT && n > 0 ? "ShaftInput Red" : "ShaftInput";
  };

  // направляющая от г/п
  function guide(load) {
    return load === 400 ? 65 : load === 630 ? 62 : 75;
  }

  // отфильтруем массив кабин по типу купе и по размерам шахты
  function cabinType(arr, minWidth, maxWidth) {
    return arr
      .filter((it) => {
        if (through) {
          return it.load === load && it.type === "through";
        }
        return it.load === load && it.type === "normal";
      })
      .filter(
        (it) =>
          it.BG <= SW - minWidth - guide(load) * 2 &&
          it.BG >= SW - maxWidth - guide(load) * 2 &&
          it.CD <= SD - C2
      );
  }

  return (
    <div className="App">
      <div className="Container">
        <form className="Sub_container">
          <fieldset>
            <legend>Шахта</legend>
            <InputText
              set={setSW}
              styles="ShaftInput"
              title="Ширина, мм:"
              type="number"
            />
            <InputText
              set={setSD}
              styles="ShaftInput"
              title="Глубина, мм:"
              type="number"
            />
            <InputText
              set={setHead}
              styles={redHead(head)}
              title="Оголовок, мм:"
              type="number"
            />
            <InputText
              set={setPit}
              styles={redPit(pit)}
              title="Приямок, мм:"
              type="number"
            />
            <InputBoolean
              set={setDeepen}
              value={deepen}
              styles="ShaftInput"
              title="Заглубить ДШ"
              type="checkbox"
            />
            <InputBoolean
              set={setThrough}
              value={through}
              styles="ShaftInput"
              title="Проходная"
              type="checkbox"
            />
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
            {shaft !== "mrl" &&
              SD.length > 0 &&
              SW.length > 0 &&
              through !== true && (
                <ResultList
                  title="Противовес сзади:"
                  cabinArr={cabinType(
                    cabinArr,
                    MIN_CAR_BRACKET * 2,
                    MAX_CAR_BRACKET * 2
                  )}
                  doorArr={doorArr}
                  T2={T2 + 180}
                  SW={SW}
                  SD={SD}
                  back={BACK}
                  load={guide(load)}
                />
              )}
            {SD.length > 0 && SW.length > 0 && (
              <ResultList
                title="Противовес сбоку:"
                cabinArr={cabinType(
                  cabinArr,
                  MIN_CAR_BRACKET + MIN_CWT_BRACKET,
                  MAX_CAR_BRACKET + MAX_CWT_BRACKET
                )}
                doorArr={doorArr}
                T2={T2}
                SW={SW}
                SD={SD}
                back={BACK}
                load={guide(load)}
              />
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;
