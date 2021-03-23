import React from "react";

function ResultList(props) {
  function guide(load) {
    return load === "400" ? 65 : load === "630" ? 62 : 75;
  }
  function filterDoors(doorArr, BG, CW, load) {
    let result = doorArr.filter(
      (it) =>
        it.DW <= CW - 100 &&
        it.fullWidth <= props.SW - 35 - load - (BG - CW) / 2 - 50 - 15
    );
    return result[result.length - 1] ? result[result.length - 1].DW : 'нету дверей';
  }
  return (
    <fieldset>
      <legend>{props.title}</legend>
      {props.arr
        .filter(
          (it) =>
            it.CW <= props.SW - props.w1 - guide(props.load) * 2 &&
            it.CW >= props.SW - props.w2 - guide(props.load) * 2 &&
            it.CD <= props.SD - props.d1
        )
        .map((it, i) => {
          return (
            <div key={i}>
              {it.title} - {it.CW} x {it.CD} {"=> "}
              ТО:{filterDoors(
                props.doors,
                it.BG,
                it.CW,
                guide(props.load)
              )}
              <br />
            </div>
          );
        })}
    </fieldset>
  );
}

export default ResultList;
