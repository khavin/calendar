import { useContext, useEffect } from "react";
import { DeviceContext } from "../../App";
import "./index.scss";
import hamburgerSrc from "/src/assets/hamburger_icon.png";

export default function Header() {
  const isMobile = useContext(DeviceContext);

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);

  return (
    <div className="header">
      <div className="app-and-menu-container">
        <span>
          <img src={hamburgerSrc}></img>&nbsp;&nbsp;
        </span>

        <div className="app-name">Calendar</div>
      </div>

      {/* TODO - add right side panel */}
      <div className="header-right-panel"></div>
    </div>
  );
}
