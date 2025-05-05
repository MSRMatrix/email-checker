import { useState } from "react";
import "./App.css";
import { Result, Theme } from "./components/context/Context";
import Dashboard from "./components/dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Infobox from "./components/dashboard/infobox/Infobox";
import Section from "./components/dashboard/section/Section";

function App() {
const [result, setResult] = useState([])
const [theme, setTheme] = useState(
  { background: "dark", anything: "light" }
);
const router = createBrowserRouter([
  {
    element: <Dashboard />,
    path: "/",
    children:[
      {
    element: <Section />,
    path: "/"
  },
      {
    element: <Infobox />,
    path: "/info"
  },
  
    ]
  },
  
])

  return (
    <>
      <Result.Provider value={{result, setResult}}>
       <Theme.Provider value={{theme, setTheme}}>
        <RouterProvider router={router} />
        </Theme.Provider>
      </Result.Provider>
    </>
  );
}

export default App;
