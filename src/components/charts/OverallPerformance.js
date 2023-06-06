import React, { useEffect, useRef, useState } from "react";
import Plot from "react-plotly.js";

function OverallPerformance() {
  const [chart1, setChart1] = useState();
  const [chart2, setChart2] = useState();
  const [chart3, setChart3] = useState();
  const [chart4, setChart4] = useState();
  const [chart5, setChart5] = useState();
  const div1 = useRef();
  const lineChartWidth = useRef();

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
        }}
      />
    );
    setChart3(
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
        }}
      />
    );
    setChart4(
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
        }}
      />
    );
    setChart5(
      <Plot
        data={[
          {
            type: "scatter",
            x: [1, 2, 3, 4],
            y: [10, 15, 13, 17],
            title: {
              text: "Total Net Sale",
              font: {
                color: "red", // Set the font color of the title
              },
            },
          },
        ]}
        layout={{
          width: lineChartWidth.current.offsetWidth,

          paper_bgcolor: "lightgray",
        }}
      />
    );
  }, []);
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">OVERALL PERFORMANCE</h1>
      <div className="grid grid-cols-2 gap-x-2 gap-y-2 ">
        <div ref={div1}>{chart1}</div>
        <div>{chart2}</div>
        <div>{chart3}</div>
        <div>{chart4}</div>
        <div ref={lineChartWidth} className="col-span-2">
          {chart5}
        </div>
      </div>
    </div>
  );
}

export default OverallPerformance;
