import React, { useState } from "react";
import { DashboardState } from "../contexts/Dashboard";

function Tabs() {
  const { setTabs } = DashboardState();
  //   const [value, setTabs] = useState(0);
  return (
    <div className="flex flex-wrap">
      <div className="m">
        <button
          className="bg-green-500 rounded-md p-3 text-xs m-1"
          value="0"
          onClick={(e) => {
            setTabs(e.target.value);
          }}
        >
          Merchandising Dashboard
        </button>
      </div>
      <div className="m">
        <button
          className="bg-green-500 rounded-md p-3 text-xs m-1"
          value="1"
          onClick={(e) => {
            setTabs(e.target.value);
          }}
        >
          Overall Performance
        </button>
      </div>
      <div className="m">
        <button
          className="bg-green-500 rounded-md p-3 text-xs m-1"
          value="2"
          onClick={(e) => {
            setTabs(e.target.value);
          }}
        >
          Regional Sales
        </button>
      </div>
      <div className="m">
        <button
          className="bg-green-500 rounded-md p-3 text-xs m-1"
          value="3"
          onClick={(e) => {
            setTabs(e.target.value);
          }}
        >
          Subclass Performance
        </button>
      </div>
      <div className="m">
        <button
          className="bg-green-500 rounded-md p-3 text-xs m-1"
          value="4"
          onClick={(e) => {
            setTabs(e.target.value);
          }}
        >
          Weekly Sales Analysis
        </button>
      </div>
      <div className="m">
        <button
          className="bg-green-500 rounded-md p-3 text-xs m-1"
          value="5"
          onClick={(e) => {
            setTabs(e.target.value);
          }}
        >
          History of Subclass
        </button>
      </div>
      <div className="m">
        <button
          className="bg-green-500 rounded-md p-3 text-xs m-1"
          value="6"
          onClick={(e) => {
            setTabs(e.target.value);
          }}
        >
          LOC SOH
        </button>
      </div>
      <div className="m">
        <button
          className="bg-green-500 rounded-md p-3 text-xs m-1"
          value="7"
          onClick={(e) => {
            setTabs(e.target.value);
          }}
        >
          vs LY
        </button>
      </div>
      <div className="m">
        <button
          className="bg-green-500 rounded-md p-3 text-xs m-1"
          value="8"
          onClick={(e) => {
            setTabs(e.target.value);
          }}
        >
          SSN Wise
        </button>
      </div>
      <div className="m">
        <button
          className="bg-green-500 rounded-md p-3 text-xs m-1"
          value="9"
          onClick={(e) => {
            setTabs(e.target.value);
          }}
        >
          SC SSN
        </button>
      </div>
      <div className="m">
        <button
          className="bg-green-500 rounded-md p-3 text-xs m-1"
          value="10"
          onClick={(e) => {
            setTabs(e.target.value);
          }}
        >
          Brand
        </button>
      </div>
      <div className="m">
        <button
          className="bg-green-500 rounded-md p-3 text-xs m-1"
          value="11"
          onClick={(e) => {
            setTabs(e.target.value);
          }}
        >
          SOH and Inwards Analysis
        </button>
      </div>
      <div className="m">
        <button
          className="bg-green-500 rounded-md p-3 text-xs m-1"
          value="12"
          onClick={(e) => {
            setTabs(e.target.value);
          }}
        >
          Inventory Optimization
        </button>
      </div>
      <div className="m">
        <button
          className="bg-green-500 rounded-md p-3 text-xs m-1"
          value="13"
          onClick={(e) => {
            setTabs(e.target.value);
          }}
        >
          Summary
        </button>
      </div>
      <div className="m">
        <button
          className="bg-green-500 rounded-md p-3 text-xs m-1"
          value="14"
          onClick={(e) => {
            setTabs(e.target.value);
          }}
        >
          Control and Action
        </button>
      </div>
    </div>
  );
}

export default Tabs;
