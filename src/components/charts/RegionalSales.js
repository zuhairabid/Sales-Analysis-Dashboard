import React, { useEffect, useRef, useState } from "react";
import Plot from "react-plotly.js";

function RegionalSales() {
  const div1 = useRef();
  const lineChartWidth = useRef();
  const [chart1, setChart1] = useState();
  const [chart2, setChart2] = useState();
  const [chart3, setChart3] = useState();
  const [chart4, setChart4] = useState();
  const [chart5, setChart5] = useState();
  useEffect(() => {
    setChart1(
      <Plot
        data={[
          {
            type: "bar",
            x: ["United States", "United Arab Emirates", "Kuwait"],
            y: [20, 14, 23],
            title: {
              text: "Net Sale by Country",
              font: {
                color: "red", // Set the font color of the title
              },
            },
          },
        ]}
        layout={{
          width: div1.current.offsetWidth,

          paper_bgcolor: "lightgray",

          xaxis: {
            title: "X-axis",
            tickmode: "linear",
          },
          yaxis: {
            title: "Y-axis",
          },
        }}
      />
    );
    setChart2(
      <Plot
        data={[
          {
            type: "bar",
            x: ["United States", "United Arab Emirates", "Kuwait"],
            y: [20, 14, 23],
            title: {
              text: "GM Val and GM% by Country",
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
            type: "bar",
            x: [
              "United States",
              "United Arab Emirates",
              "Kuwait",
              "Unitedvvd States",
              "Unitdved Arab Emirates",
              "Kuwadvdit",
              "Unitdsved States",
              "Unidvsdvted Arab Emirates",
              "Kuwsdvsait",
              "Unitedsvsadvd States",
              "sadv Arab Emirates",
              "sdvfsad",
            ],
            y: [20, 14, 23, 20, 14, 23, 20, 14, 23, 20, 14, 23],
            title: {
              text: "Sold Qty by Country.",
              font: {
                color: "red", // Set the font color of the title
              },
            },
          },
        ]}
        layout={{
          width: div1.current.offsetWidth,

          paper_bgcolor: "lightgray",

          //
        }}
      />
    );
    setChart4(
      <Plot
        data={[
          {
            type: "scatter",
            x: ["United States", "United Arab Emirates", "Kuwait"],
            y: [20, 14, 23],
            title: {
              text: "Net Sale by Country (Years)",
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
            xaxis: {
              title: "X-axis",
              showticklabels: true,
            },
            type: "scatter",
            x: [
              "United States",
              "United Arab Emirates",
              "Kuwait",
              "dsfvasdfs",
              "dsfasdfasdf",
            ],
            y: [20, 14, 23, 24, 23],
            title: {
              text: "Net Sale by Country (Season)",
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
      <h1 className="text-center font-bold text-3xl">REGIONAL sALES</h1>
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

export default RegionalSales;
