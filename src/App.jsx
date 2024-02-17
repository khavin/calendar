import { createContext, useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import MainPanel from "./components/MainPanel";

export const DeviceContext = createContext(null);

function App() {
  const mq = window.matchMedia("(max-width: 650px)");
  const [isMobile, setIsMobile] = useState(mq.matches);

  useEffect(() => {
    mq.addEventListener("change", (e) => {
      setIsMobile(e.matches);
    });
  }, []);

  return (
    <div>
      <DeviceContext.Provider value={isMobile}>
        <Header />
        <div className="content-panel">
          <SidePanel />
          <MainPanel />
        </div>
      </DeviceContext.Provider>
    </div>
  );
}

export default App;
