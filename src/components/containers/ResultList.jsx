import React from "react";

import ResultUnit from "../presentationals/ResultUnit";

function ResultList({ title, cabinArr, T2, C2, SW, SD, back, minBack, load, doorArr }) {
  function filterDoors(array, BG, CW, CD) {
    const DW_TO_WALL = 35 + load + (BG - CW) / 2 + (CW === 810 ? 35 : 50);
    const result = array.filter((it) => {
      if (SD >= CD + T2 + minBack && SD <= CD + T2 + back) return it.type === "T2" && it.DW <= CW - 100 && it.fullWidth + 15 <= SW - DW_TO_WALL;
      if (SD >= CD + C2 + minBack && SD < CD + T2 + minBack) return it.type === "C2" && it.DW <= CW - 100 && SW >= it.fullWidth + 30;
      return null;
    });
    return result[result.length - 1]
      ? `${result[result.length - 1].type}: ${result[result.length - 1].DW}`
      : "нету дверей";
  }
  return (
    <div className="result-form">
      <legend className="filter-form__legend">{title}</legend>
      {cabinArr.map((it, i) => {
        const filteredDoorsArr = filterDoors(
          doorArr,
          it.BG,
          it.CW,
          it.CD,
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
    </div>
  );
}

export default ResultList;
