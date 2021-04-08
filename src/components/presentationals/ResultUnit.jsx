import React from "react";

function ResultUnit({ title, CW, CD, DW }) {

  return (
    <div className="result">
      <div className="result__title">
        {title} ({CW}x{CD}) <br />
        {DW}
      </div>
    </div>
  );
}

export default ResultUnit;
