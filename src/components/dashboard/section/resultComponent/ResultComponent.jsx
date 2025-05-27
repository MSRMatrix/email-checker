import { useContext } from "react";
import "./resultComponent.css";
import { Result, Theme } from "../../../context/Context";

const ResultComponent = () => {
  const { result, setResult } = useContext(Result);
  const { theme, setTheme } = useContext(Theme);

  const checkIcon = (condition, name) => {
  const isDisposable = name === "Disposable";
  const color = isDisposable
    ? condition ? "red" : "green"
    : condition ? "green" : "red"; 
  return (
    <i
      className={`fa-solid ${condition ? "fa-check" : "fa-xmark"}`}
      style={{ color }}
    ></i>
  );
};

const propsToDisplay = [
  { label: "Disposable", key: "disposable" },
  { label: "DNS", key: "dns" },
  { label: "Format", key: "format" },
  { label: "Whitelist", key: "whitelist" },
];

 return (
  <div className={`result-container`}>
    <h2>Results:</h2>
    {result.length > 0 ? (
      result.map((item, key) => (
        <div key={key} className={`result-window`}>
          <h2>Email: {item.email}</h2>
          <p>Domain: {item.domain ? item.domain : "Not available"}</p>
          <div className="result-details">
            {propsToDisplay.map(({ label, key }) => (
              <p key={key}>
                {label}: {checkIcon(item[key], label)}
              </p>
            ))}
          </div>
        </div>
      ))
    ) : (
      "No valid emails to check"
    )}
  </div>
);
};

export default ResultComponent;
