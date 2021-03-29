import React from "react";

import ResultUnit from "./ResultUnit.jsx";

function ResultList({ title, cabinArr, T2, SW, SD, back, load, doorArr }) {
  function filterDoors(doorArr, BG, CW, CD, load) {
    const AXIS_TO_CWT_WALL =
      230 + load + (BG - CW) / 2 + (CW === 810 ? 35 : 50); // п-обр кронштейн (230) + направляющая (65/62/75) + половина расстояния от направляющей до купе (40 / 50) + минимальная стойка (35 / 50)

    const AXIS_TO_WALL = 35 + load + (BG - CW) / 2 + (CW === 810 ? 35 : 50); // кронштейн (35) + направляющая (65/62/75) + половина расстояния от направляющей до купе (40 / 50) + минимальная стойка (35 / 50)

    const T2_DEPTH = CD + T2; // минимальная глубина шахты для установки телескопического открывания

    const result = doorArr.filter((it) => {
      if (SD >= T2_DEPTH)
        return (
          it.type === "T2" &&
          it.DW <= CW - 100 &&
          it.fullWidth + 15 <= SW - AXIS_TO_WALL // проверяю что при наибольшем смещении (когда стойка 50) хватит места до другой стены
        );
      if (title === "Противовес сбоку:")
        return (
          it.type === "C2" &&
          it.DW <= CW - 100 &&
          it.fullWidth / 2 + 15 <= AXIS_TO_CWT_WALL &&
          it.fullWidth / 2 + 15 <= SW - AXIS_TO_CWT_WALL + it.DW / 2
        );

      return it.type === "C2" && SW >= it.fullWidth + 30;
    });
    return result[result.length - 1]
      ? `${result[result.length - 1].type}: ${result[result.length - 1].DW}`
      : "нету дверей";
  }
  return (
    <fieldset>
      <legend>{title}</legend>
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
            key={i}
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
