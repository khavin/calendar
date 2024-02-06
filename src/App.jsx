import "./App.css";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import MainPanel from "./components/MainPanel";

function App() {
  return (
    <div>
      <Header />
      <div className="content-panel">
        <SidePanel />
        <MainPanel />
      </div>
    </div>
  );
}

export default App;
