import React from "react";

function ResultList(props) {
  function guide(load) {
    return load === "400" ? 65 : load === "630" ? 62 : 75;
  }
  function filterDoors(doorArr, BG, CW, CD, load) {
    let result = doorArr.filter((it) => {
      if (props.SD >= CD + props.T2) {
        return (
          it.type === "T2" &&
          it.DW <= CW - 100 &&
          it.fullWidth <= props.SW - 35 - load - (BG - CW) / 2 - 50 - 15
        );
      }
      if (props.title === "Противовес сбоку:") {
        const AXIS_TO_WALL = 230 + load + (BG - CW) / 2 + 50 + it.DW / 2;
        return (
          it.type === "C2" &&
          it.fullWidth / 2 + 15 <= AXIS_TO_WALL &&
          it.fullWidth / 2 + 15 <= props.SW - AXIS_TO_WALL
        );
      }
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
            it.BG <= props.SW - props.w1 - guide(props.load) * 2 &&
            it.BG >= props.SW - props.w2 - guide(props.load) * 2 &&
            it.CD <= props.SD - props.C2
        )
        .map((it, i) => {
          if (
            filterDoors(props.doors, it.BG, it.CW, it.CD, guide(props.load)) ===
            "нету дверей"
          )
            return null;
          return (
            <div className="Result" key={i}>
              {it.title} ({it.CW}x{it.CD})<br />
              {filterDoors(props.doors, it.BG, it.CW, it.CD, guide(props.load))}
              <br />
            </div>
          );
        })}
    </fieldset>
  );
}

export default ResultList;
