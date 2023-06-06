import React, { createContext, useContext, useState } from "react";

const Dashboard = createContext();

const DashboardContext = ({ children }) => {
  const [tabs, setTabs] = useState(0);

  return (
    <Dashboard.Provider value={{ tabs, setTabs }}>
      {children}
    </Dashboard.Provider>
  );
};

export default DashboardContext;

export const DashboardState = () => {
  return useContext(Dashboard);
};
