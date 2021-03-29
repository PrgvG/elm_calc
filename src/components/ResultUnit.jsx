import React from "react";

function ResultUnit({ key, title, CW, CD, DW }) {
  return (
    <div className="Result" key={key}>
      {title} ({CW}x{CD})<br />
      {DW}
      <br />
    </div>
  );
}

export default ResultUnit;
