import React from "react";
import { DashboardState } from "../contexts/Dashboard";
import MerchandizingDashboard from "./charts/MerchandizingDashboard";
import OverallPerformance from "./charts/OverallPerformance";
import RegionalSales from "./charts/RegionalSales";
import SubclassPerformance from "./charts/SubclassPerformance";
import WeeklySalesAnalysis from "./charts/WeeklySalesAnalysis";
import HistoryofSubclass from "./charts/HistoryofSubclass";
import LOCSOH from "./charts/LOCSOH";
import SSNWise from "./charts/SSNWise";
import SCSSN from "./charts/SCSSN";
import Brand from "./charts/Brand";
import SOH_and_inward_analysis from "./charts/SOH_and_inward_analysis";
import InventoryOptimization from "./charts/InventoryOptimization";
import Summary from "./charts/Summary";
import ControlAndAction from "./charts/ControlAndAction";
import VSLY from "./charts/VSLY";

function Chart() {
  const { tabs } = DashboardState();
  return (
    <div>
      {tabs == 0 ? (
        <MerchandizingDashboard />
      ) : tabs == 1 ? (
        <OverallPerformance />
      ) : tabs == 2 ? (
        <RegionalSales />
      ) : tabs == 3 ? (
        <SubclassPerformance />
      ) : tabs == 4 ? (
        <WeeklySalesAnalysis />
      ) : tabs == 5 ? (
        <HistoryofSubclass />
      ) : tabs == 6 ? (
        <LOCSOH />
      ) : tabs == 7 ? (
        <VSLY />
      ) : tabs == 8 ? (
        <SSNWise />
      ) : tabs == 9 ? (
        <SCSSN />
      ) : tabs == 10 ? (
        <Brand />
      ) : tabs == 11 ? (
        <SOH_and_inward_analysis />
      ) : tabs == 12 ? (
        <InventoryOptimization />
      ) : tabs == 13 ? (
        <Summary />
      ) : tabs == 14 ? (
        <ControlAndAction />
      ) : (
        <MerchandizingDashboard />
      )}
    </div>
  );
}

export default Chart;
