import { useState } from "react";
import "./App.css";
import { Result, Theme } from "./components/context/Context";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
const [result, setResult] = useState([])
const [theme, setTheme] = useState(
  { background: "dark", anything: "light" }
)

  return (
    <>
      <Result.Provider value={{result, setResult}}>
       <Theme.Provider value={{theme, setTheme}}>
          <Dashboard />
        </Theme.Provider>
      </Result.Provider>
    </>
  );
}

export default App;
