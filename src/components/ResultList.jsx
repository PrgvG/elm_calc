import React from "react";

import ResultUnit from "./ResultUnit.jsx";

function ResultList({ title, cabinArr, T2, C2, SW, SD, back, load, doorArr }) {

  function filterDoors(doorArr, BG, CW, CD, load) {
    
    const DW_TO_WALL = 35 + load + (BG - CW) / 2 + (CW === 810 ? 35 : 50);
    const result = doorArr.filter((it) => {
      if (SD >= CD + T2 && SD <= CD + T2 + back)
        return (
          it.type === "T2" &&
          it.DW <= CW - 100 &&
          it.fullWidth + 15 <= SW - DW_TO_WALL
        );
      if (SD < CD + T2 && SD >= CD + C2)
        return (
          it.type === "C2" && 
          it.DW <= CW - 100 &&
          SW >= it.fullWidth + 30 
        );
      return null;
    });
    return result[result.length - 1]
      ? `${result[result.length - 1].type}: ${result[result.length - 1].DW}`
      : "нету дверей";
  }
  return (
    <fieldset className="filter-form">
      <legend className="filter-form__legend">{title}</legend>
      {cabinArr.map((it, i) => {
        const filteredDoorsArr = filterDoors(
          doorArr,
          it.BG,
          it.CW,
          it.CD,
          load
        );
        if (filteredDoorsArr === "нету дверей") return null;
        return (
          <ResultUnit
            key={`${i}`}
            title={it.title}
            CW={it.CW}
            CD={it.CD}
            DW={filteredDoorsArr}
          />
        );
      })}
    </fieldset>
  );
}

export default ResultList;
