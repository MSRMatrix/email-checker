import { useContext, useState } from "react";
import "./themeButton.css";
import { Theme } from "../../context/Context";

const ThemeButton = () => {
    const {theme, setTheme} = useContext(Theme)


    
  const [className, setClassName] = useState({
    outer: "outer-dark-mode",
    inner: "inner-dark-mode"
  });

  function editClassName() {
    if (
      className.outer === "outer-dark-mode" &&
      className.inner === "inner-dark-mode"
    ) {
      setClassName({
        outer: "outer-light-mode",
        inner: "inner-light-mode"
      });
    } else {
      setClassName({
        outer: "outer-dark-mode",
        inner: "inner-dark-mode"
      });
    }
  }

  return (
    <div className={`outer-div ${className.outer}`}>
      <div
        onClick={editClassName}
        className={`inner-div ${className.inner}`}
      ></div>
    </div>
  );
};

export default ThemeButton;
