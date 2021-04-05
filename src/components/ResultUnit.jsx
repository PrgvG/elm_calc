import React from "react";

function ResultUnit({ title, CW, CD, DW }) {
  return (
    <div className="Result">
      {title} ({CW}x{CD})<br />
      {DW}
      <br />
    </div>
  );
}

export default ResultUnit;
