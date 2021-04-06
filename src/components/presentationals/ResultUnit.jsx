import React from "react";
// import { useDispatch } from "react-redux";
// import { updateCabin, updateModal } from "../redux/reducers/shaft";

function ResultUnit({ title, CW, CD, DW }) {
  // const dispatch = useDispatch();
  // const cabinHandle = () => {
  //   dispatch(updateCabin({ cabinWidth: CW, cabinDepth: CD, doorWidth: DW }));
  //   dispatch(updateModal());
  // };
  return (
    <div className="result">
      <div className="result__title">
        {title} ({CW}x{CD}) <br />
        {DW}
      </div>
      {/* <button className="filter-form__btn" type="button" onClick={cabinHandle}>
        {title}
      </button> */}
    </div>
  );
}

export default ResultUnit;
