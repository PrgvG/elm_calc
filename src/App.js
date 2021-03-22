import "./App.css";
import { useState } from "react";

function App() {
  const [width, setWidth] = useState(Number);
  const [depth, setDepth] = useState(Number);
  const [head, setHead] = useState(Number);
  const [height, setHeight] = useState(Number);
  const [pit, setPit] = useState(Number);
  const [shaft, setShaft] = useState("");
  const [load, setLoad] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [toggle, setToggle] = useState(true);

  const sqrOfSpeed = (n) => 0.035 * n ** 2
  const coupleGuide = (n) => n + n
  const redHead = (n) => {
    const tmp = shaft === "mr" ? 3300 : height > 40 ? 4100 : 3400
    return n < tmp && n > 0 ? "ShaftInput Red" : "ShaftInput"
  }
  const redPit = (n) => {
    return n < 1050 && n > 0 ? "ShaftInput Red" : "ShaftInput"
  }
  const shaftArr = [
    { type: "radio", id: "shaft1", name: "shaft", value: "mr", label: "МП" },
    { type: "radio", id: "shaft2", name: "shaft", value: "mrl", label: "БМП" },
  ];
  const loadArr = [
    { type: "radio", id: "load1", name: "load", value: coupleGuide(65), label: "400кг" },
    { type: "radio", id: "load2", name: "load", value: coupleGuide(75), label: "630/1000кг", },
    { type: "radio", id: "load3", name: "load", value: coupleGuide(75), label: "1000+кг" },
  ];
  const speedArr = [
    { type: "radio", id: "speed1", name: "speed", value: sqrOfSpeed(1), label: "1.0м/с", },
    { type: "radio", id: "speed2", name: "speed", value: sqrOfSpeed(1.6), label: "1.6м/с", },
    { type: "radio", id: "speed3", name: "speed", value: sqrOfSpeed(2), label: "2.0м/с", },
  ];
  const heightArr = [
    { type: "radio", id: "height1", name: "height", value: 39, label: "до 40" },
    { type: "radio", id: "height2", name: "height", value: 41, label: "до 75" },
  ];
  const cabinArr = [
    {width: 950, height: 1050, name: "0401"}, 
    {width: 810, height: 1000, name: "0402"}, 
    {width: 810, height: 810, name: "0403"}, 
    {width: 1000, height: 1250, name: "0404"}, 
    {width: 1050, height: 1100, name: "0405"}, 
    {width: 1100, height: 950, name: "0406"}, 
    {width: 950, height: 1100, name: "0407"}, 
    {width: 2100, height: 1100, name: "0601"}, 
    {width: 1100, height: 1400, name: "0602"}, 
    {width: 1100, height: 2100, name: "0603"}, 
    {width: 1050, height: 2100, name: "0604"}, 
    {width: 1400, height: 2300, name: "0605"}, 
    {width: 1400, height: 1200, name: "0606"}, 
    {width: 1400, height: 2200, name: "0607"}, 
    {width: 1400, height: 2100, name: "0608"}, 
    {width: 2170, height: 1170, name: "0609"}, 
    {width: 1600, height: 1400, name: "1001"}, 
    {width: 1400, height: 1600, name: "1002"}, 
    {width: 1700, height: 1500, name: "1003"}, 
    {width: 2100, height: 1500, name: "1004"}, 
    {width: 1500, height: 1700, name: "1005"}, 
    {width: 1400, height: 2400, name: "1006"}, 
    {width: 2100, height: 1400, name: "1007"}, 
    {width: 1200, height: 2300, name: "1008"}, 
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>Я не очень понимаю зачем это делаю, просто делаю.</p>
      </header>
      <body className="App-body">
        <form className="Body-container">
          <div className="Container-radio">
            <fieldset>
              <legend>Тип шахты</legend>
              {shaftArr.map((it) => {
                return (
                  <div className="Radio-input">
                    <input
                      type={it.type}
                      id={it.id}
                      name={it.name}
                      value={it.value}
                      onClick={(e) => setShaft(e.target.value)}
                    />
                    <label for={it.id}>{it.label}</label>
                  </div>
                );
              })}
            </fieldset>
            <fieldset>
              <legend>Грузоподъемность</legend>
              {loadArr.map((it) => {
                return (
                  <div className="Radio-input">
                    <input
                      type={it.type}
                      id={it.id}
                      name={it.name}
                      value={it.value}
                      onClick={(e) => setLoad(e.target.value)}
                    />
                    <label for={it.id}>{it.label}</label>
                  </div>
                );
              })}
            </fieldset>
            <fieldset>
              <legend>Скорость</legend>
              {speedArr.map((it) => {
                return (
                  <div className="Radio-input">
                    <input
                      type={it.type}
                      id={it.id}
                      name={it.name}
                      value={it.value}
                      onClick={(e) => setSpeed(e.target.value)}
                    />
                    <label for={it.id}>{it.label}</label>
                  </div>
                );
              })}
            </fieldset>
            <fieldset>
              <legend>Высота подъема</legend>
              {heightArr.map((it) => {
                return (
                  <div className="Radio-input">
                    <input
                      type={it.type}
                      id={it.id}
                      name={it.name}
                      value={it.value}
                      onClick={(e) => setHeight(e.target.value)}
                    />
                    <label for={it.id}>{it.label}</label>
                  </div>
                );
              })}
            </fieldset>
          </div>
          <fieldset className="Container-input">
            <legend>Параметры шахты</legend>
            <div className="ShaftInput">
              Ширина, мм: <input onChange={(e) => setWidth(e.target.value)} />
            </div>
            <div className="ShaftInput">
              Глубина, мм: <input onChange={(e) => setDepth(e.target.value)} />
            </div>
            <div className={redHead(head)}>
              Последний этаж, мм:
              <input onChange={(e) => setHead(e.target.value)} />
            </div>
            <div className={redPit(pit)}>
              Приямок, мм: <input onChange={(e) => setPit(e.target.value)} />
            </div>
          </fieldset>
          <button type="button" onClick={(e) => {
            setToggle(!toggle)
          }}>
            toggle
          </button>
        </form>
        {toggle && (
          <div className="Body-result">
            <fieldset>
              <legend>Результаты</legend>
              <fieldset>
                Противовес сбоку:
                <div>Ширина купе {width != 0 && width - 275 - load}</div>
                <div>Глубина купе {depth != 0 && depth - 255}</div>
                <div>{cabinArr.filter(it => it.width < width - 275 - load && it.width > width - 275 - load - 300 && it.height < depth - 255).map(it => {
                return (
                <>
                  {it.width} x {it.height} - {it.name} <br/>
                </>
                )
              })}</div>
              </fieldset>
              {shaft === "mr" && (<fieldset>
                Противовес сзади:
                <div>Ширина купе {width != 0 && width - 90 - load}</div>
                <div>Глубина купе {depth != 0 && depth - 470}</div>
                <div>{cabinArr.filter(it => {
                  return it.width < width - 90 - load && it.width > width - load - 390 && it.height < depth - 470
                }).map(it => {
                  return (
                  <>
                    {it.width} x {it.height} - {it.name} <br/>
                  </>
                )
              })}</div>
              </fieldset>)}
            </fieldset>
          </div>
        )}
      </body>
      <footer className="App-footer">
        <p>Даже тут не понимаю...</p>
      </footer>
    </div>
  );
}

export default App;
