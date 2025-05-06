import { useContext, useState } from "react";
import "./themeButton.css";
import { Theme } from "../../context/Context";

const ThemeButton = () => {
  const { theme, setTheme } = useContext(Theme);

  const [className, setClassName] = useState({
    outer: "outer-dark-mode",
    inner: "inner-dark-mode",
  });

  function editClassName() {
    if (
      className.outer === "outer-dark-mode" &&
      className.inner === "inner-dark-mode"
    ) {
      setTheme({ background: "light", anything: "dark" });
      setClassName({
        outer: "outer-light-mode",
        inner: "inner-light-mode", 
      });
    } else {
      setTheme({ background: "dark", anything: "light" });
      setClassName({
        outer: "outer-dark-mode",
        inner: "inner-dark-mode",
      }); 
    }
  }

  return (
    <div className="theme-button">
      <h3>
        {theme.background.slice(0, 1).toUpperCase() + theme.background.slice(1)}{" "}
        Mode
      </h3>
      <div onClick={editClassName} className={`outer-div ${className.outer}`}>
        <div className={`inner-div ${className.inner}`}></div>
      </div>
    </div>
  );
};

export default ThemeButton;
