import { useContext } from "react";
import { Theme } from "../context/Context";
import "./dashboard.css";
import Advertising from "./advertising/Advertising";
import Header from "./header/Header";
import Section from "./section/Section";
import ThemeButton from "./themeButton/ThemeButton";
import Infobox from "./infobox/Infobox";

function Dashboard() {
  const { theme, setTheme } = useContext(Theme);
  return (
    <div className={`dashboard ${theme.background}`}>
      <Header />
      <ThemeButton />
      <Section />
      <Advertising />
      <Infobox />
      <div className={`${theme.anything}`}>
        <h2>Note: </h2>
        <p>
          Sometimes, a test or tool may indicate that an email address is valid,
          but it might still have issues.{" "}
        </p>
        <p>
          {" "}
          This can be because the test only checks certain aspects (like format
          or syntax) and not all possible factors that contribute to an email's
          validity.
        </p>
        <p>
          {" "}
          For example, the domain might not exist, or the mail server might be
          unreachable.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
