import React, { useEffect, useRef, useState } from "react";
import Plot from "react-plotly.js";

function OverallPerformance() {
  const [chart1, setChart1] = useState();
  const [chart2, setChart2] = useState();
  const [chart3, setChart3] = useState();
  const [chart4, setChart4] = useState();
  const div1 = useRef();
  const div2 = useRef();
  const div3 = useRef();
  const div4 = useRef();
  useEffect(() => {
    setChart1(
      <Plot
        data={[
          {
            type: "indicator",
            mode: "number+delta",
            value: 400,
            number: { prefix: "$" },
            delta: { position: "top", reference: 320 },
            domain: { x: [0, 1], y: [0, 1] },
            title: {
              text: "Total Net Sale",
              font: {
                color: "red", // Set the font color of the title
              },
            },
          },
        ]}
        layout={{
          width: div1.current.offsetWidth,

          paper_bgcolor: "lightgray",

          margin: { t: 0, b: 0, l: 0, r: 0 },
        }}
      />
    );
    setChart2(
      <Plot
        data={[
          {
            type: "indicator",
            mode: "number+delta",
            value: 400,
            number: { prefix: "$" },
            delta: { position: "top", reference: 320 },
            domain: { x: [0, 1], y: [0, 1] },
            title: {
              text: "Total Net Sale",
              font: {
                color: "red", // Set the font color of the title
              },
            },
          },
        ]}
        layout={{
          width: div1.current.offsetWidth,

          paper_bgcolor: "lightgray",

          margin: { t: 0, b: 0, l: 0, r: 0 },
        }}
      />
    );
  }, []);
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">OVERALL PERFORMANCE</h1>
      <div className="grid grid-cols-2 space-x-3 ">
        <div ref={div1}>{chart1}</div>
        <div>{chart2}</div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default OverallPerformance;
