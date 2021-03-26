import React from "react";

function ResultList(props) {
  function filterDoors(doorArr, BG, CW, CD, load) {
    let AXIS_TO_CWT_WALL = 230 + load + (BG - CW) / 2 + (CW === 810 ? 35 : 50); // п-обр кронштейн (230) + направляющая (65/62/75) + половина расстояния от направляющей до купе (40 / 50) + минимальная стойка (35 / 50)
    let AXIS_TO_WALL = 35 + load + (BG - CW) / 2 + (CW === 810 ? 35 : 50); // кронштейн (35) + направляющая (65/62/75) + половина расстояния от направляющей до купе (40 / 50) + минимальная стойка (35 / 50)
    let result = doorArr.filter((it) => {
      if (props.SD >= CD + props.T2)
        return (
          it.type === "T2" &&
          it.DW <= CW - 100 &&
          it.fullWidth + 15 <= props.SW - AXIS_TO_WALL // проверяю что при наибольшем смещении (когда стойка 50) хватит места до другой стены
        );
      if (props.title === "Противовес сбоку:")
        return (
          it.type === "C2" &&
          it.DW <= CW - 100 &&
          it.fullWidth / 2 + 15 <= AXIS_TO_CWT_WALL &&
          it.fullWidth / 2 + 15 <= props.SW - AXIS_TO_CWT_WALL + it.DW / 2
        );

      return it.type === "C2" && props.SW >= it.fullWidth + 30;
    });
    return result[result.length - 1]
      ? `${result[result.length - 1].type}: ${result[result.length - 1].DW}`
      : "нету дверей";
  }
  return (
    <fieldset>
      <legend>{props.title}</legend>
      {props.arr
        .filter(
          (it) =>
            it.BG <= props.SW - props.w1 - props.load * 2 &&
            it.BG >= props.SW - props.w2 - props.load * 2 &&
            it.CD <= props.SD - props.C2
        )
        .map((it, i) => {
          if (
            filterDoors(props.doors, it.BG, it.CW, it.CD, props.load) ===
            "нету дверей"
          )
            return null;
          return (
            <div className="Result" key={i}>
              {it.title} ({it.CW}x{it.CD})<br />
              {filterDoors(props.doors, it.BG, it.CW, it.CD, props.load)}
              <br />
            </div>
          );
        })}
    </fieldset>
  );
}

export default ResultList;
