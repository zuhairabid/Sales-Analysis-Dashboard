import React, { useEffect, useRef, useState } from "react";
import Plot from "react-plotly.js";

function WeeklySalesAnalysis() {
  const [chart1, setChart1] = useState();
  const [chart2, setChart2] = useState();
  const [chart3, setChart3] = useState();

  const div1 = useRef();
  const lineChartWidth = useRef();

  useEffect(() => {
    setChart1(
      <Plot
        data={[
          {
            xaxis: {
              title: "X-axis",
              showticklabels: true,
            },
            type: "scatter",
            x: [
              "WOMEN FOOTWEAR",
              "WOMEN ACTIVE SHOES",
              "WOMEN FOOTWEAR SANDALS/SLIPPERS",
              "WOMEN MODEST",
              "WOMEN MODEST DESK",
              "WOMEN ACCESSORY (JEWELLERY, COSMETIC, ETC )",
              "WOMEN CLASSIC",
            ],
            y: [290, 1457, 11, 724, 233],
            title: {
              text: "Net Sale by Country (Season)",
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
            xaxis: {
              title: "X-axis",
              showticklabels: true,
            },
            type: "scatter",
            x: [
              "WOMEN FOOTWEAR",
              "WOMEN ACTIVE SHOES",
              "WOMEN FOOTWEAR SANDALS/SLIPPERS",
              "WOMEN MODEST",
              "WOMEN MODEST DESK",
              "WOMEN ACCESSORY (JEWELLERY, COSMETIC, ETC )",
              "WOMEN CLASSIC",
            ],
            y: [290, 1457, 11, 724, 233],
            title: {
              text: "Net Sale by Country (Season)",
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
            xaxis: {
              title: "X-axis",
              showticklabels: true,
            },
            type: "scatter",
            x: [
              "WOMEN FOOTWEAR",
              "WOMEN ACTIVE SHOES",
              "WOMEN FOOTWEAR SANDALS/SLIPPERS",
              "WOMEN MODEST",
              "WOMEN MODEST DESK",
              "WOMEN ACCESSORY (JEWELLERY, COSMETIC, ETC )",
              "WOMEN CLASSIC",
            ],
            y: [290, 1457, 11, 724, 233],
            title: {
              text: "Net Sale by Country (Season)",
              font: {
                color: "red", // Set the font color of the title
              },
            },
          },
          {
            x: [
              "WOMEN FOOTWEAR",
              "WOMEN ACTIVE SHOES",
              "WOMEN FOOTWEAR SANDALS/SLIPPERS",
              "WOMEN MODEST",
              "WOMEN MODEST DESK",
              "WOMEN ACCESSORY (JEWELLERY, COSMETIC, ETC )",
              "WOMEN CLASSIC",
            ],
            y: [202, 134, 423, 264, 723],
          },
          {
            x: [
              "WOMEN FOOTWEAR",
              "WOMEN ACTIVE SHOES",
              "WOMEN FOOTWEAR SANDALS/SLIPPERS",
              "WOMEN MODEST",
              "WOMEN MODEST DESK",
              "WOMEN ACCESSORY (JEWELLERY, COSMETIC, ETC )",
              "WOMEN CLASSIC",
            ],
            y: [11, 77, 243, 2, 90],
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
        <div ref={lineChartWidth} className="col-span-2">
          {chart3}
        </div>
      </div>
    </div>
  );
}

export default WeeklySalesAnalysis;
