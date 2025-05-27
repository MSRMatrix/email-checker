import { useContext } from "react";
import "./infobox.css";
import { Theme } from "../../context/Context";
import { infoboxDetails } from "./infoboxData";

const Infobox = () => {
  const { theme, setTheme } = useContext(Theme);
  return (
    <div className="infobox-container">
      {infoboxDetails.map((item, key) => 
        <div key={key} className={`infobox ${theme.anything}`}>
        <h2>{item.name}</h2>
        <p>
          {item.text}
        </p>
      </div>
      )}
    </div>
  );
};

export default Infobox;
