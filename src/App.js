import "./App.css";
import ChartsOptions from "./components/ChartsOptions";
import DashBoard from "./components/DashBoard";
import Dashboard from "./contexts/Dashboard";
function App() {
  return (
    <Dashboard>
      <div className="flex">
        <ChartsOptions />
        <DashBoard />
      </div>
    </Dashboard>
  );
}

export default App;
