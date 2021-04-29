import React from "react"

import ResultCards from "../presentationals/ResultCards"

import doorArr from "../../data/door"
import cabinArr from "../../data/cabin"

function Result({ shaft, cwt }) {
  const CABIN_TO_CWT = 50
  const MIN_CAR_BRACKET = shaft.load === 1000 ? 75 : 35
  const MAX_CAR_BRACKET = 245
  const MIN_CWT_BRACKET = shaft.cwtToWall + (shaft.load === 1000 ? 180 : cwt.depth) / 2 + 145
  const MAX_CWT_BRACKET = 550
  const BACK = shaft.walkThrough ? 70 + (120 - shaft.wallToShaftDood * 2) : 900 + (60 - shaft.wallToShaftDood)
  const C2 = shaft.walkThrough ? shaft.wallToShaftDood * 2 + 360 : shaft.wallToShaftDood + 205 + shaft.cwtToWall
  const T2 = C2 + (shaft.walkThrough ? 140 : 70)

  function guide(load) {
    if (load === 400) return 65
    if (load === 630) return shaft.guide
    return 75 // load === 1000
  }

  const sideCWT = cabinArr.filter(
    it =>
      it.load === shaft.load &&
      it.BG <= shaft.width - (MIN_CAR_BRACKET + MIN_CWT_BRACKET) - guide(shaft.load) * 2 &&
      it.BG >= shaft.width - (MAX_CAR_BRACKET + MAX_CWT_BRACKET) - guide(shaft.load) * 2 &&
      it.CD <= shaft.depth - C2 &&
      it.CD >= shaft.depth - T2 - BACK &&
      it.walkThrough === shaft.walkThrough
  )

  const backCWT = cabinArr.filter(
    it =>
      it.load === shaft.load &&
      it.BG <= shaft.width - (MIN_CAR_BRACKET + MIN_CAR_BRACKET) - guide(shaft.load) * 2 &&
      it.BG >= shaft.width - (MAX_CAR_BRACKET + MAX_CAR_BRACKET) - guide(shaft.load) * 2 &&
      it.CD <= shaft.depth - (C2 + cwt.depth + CABIN_TO_CWT) &&
      it.CD >= shaft.depth - (T2 + 330 + (shaft.wallToShaftDood === 35 ? 35 : 0) + (shaft.cwtToWall === 25 ? 25 : 0)) &&
      shaft.machineRoom &&
      !it.walkThrough
  )
  function superCabinFilter(arr, minBack, back) {
    return arr.map(cabin => {
      let DW_TO_WALL = 35 + guide(shaft.load) + (cabin.BG - cabin.CW) / 2 + (cabin.CW === 810 ? 35 : 50)
      const doorFilteredByShaft = doorArr
        .filter(door => {
          const halfCWTplusHalfCabinAndShaftDoors = (cwt.width + cwt.braket) / 2 + 160 /*half of pulley*/ + cabin.CD / 2 + 35 + 60 - (shaft.wallToShaftDood === 35 ? 35 : 0)
          return (
            (door.type === "T2" &&
              door.DW <= cabin.CW - 100 &&
              shaft.width >= door.fullWidth + 15 + DW_TO_WALL &&
              shaft.depth >= cabin.CD + T2 + minBack &&
              shaft.depth >= halfCWTplusHalfCabinAndShaftDoors + 180 /* a pair of aluminum sills of T2 */ &&
              shaft.depth <= cabin.CD + T2 + back) ||
            (door.type === "C2" &&
              door.DW <= cabin.CW - 100 &&
              shaft.width >= door.fullWidth + 30 &&
              shaft.depth >= cabin.CD + C2 + minBack &&
              shaft.depth >= halfCWTplusHalfCabinAndShaftDoors + 110 /* a pair of aluminum sills of C2 */ &&
              shaft.depth <= cabin.CD + C2 + back)
          )
        })
        .filter((obj, i, arr) => arr.map(it => it.type).lastIndexOf(obj.type) === i)
        .map(it => ({ [it.type]: it.DW }))
        .reduce((acc, rec) => ({ ...acc, ...rec }), {})
      return { title: cabin.title, CW: cabin.CW, CD: cabin.CD, ...doorFilteredByShaft }
    })
  }

  let elements = []

  switch (shaft.walkThrough ? "through" : "normal") {
    case "through":
      elements = [
        {
          title: "противовес сбоку:",
          array: superCabinFilter(sideCWT, 0, BACK),
        },
      ]
      break
    default:
      elements = [
        {
          title: "противовес сзади:",
          array: superCabinFilter(backCWT, 50 + cwt.depth, 330 + (60 - shaft.wallToShaftDood) + (50 - shaft.cwtToWall) + (180 - cwt.depth)),
        },
        {
          title: "противовес сбоку:",
          array: superCabinFilter(sideCWT, 0, BACK),
        },
      ]
  }

  return <ResultCards elements={elements} />
}

export default Result
