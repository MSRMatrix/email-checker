import { useContext } from "react";
import { Theme } from "../context/Context";
import "./dashboard.css";
import Advertising from "./advertising/Advertising";
import Header from "./header/Header";
import Section from "./section/Section";
import ThemeButton from "./themeButton/ThemeButton";
import Infobox from "./infobox/Infobox";
import Footer from "./footer/Footer";

function Dashboard() {
  const { theme, setTheme } = useContext(Theme);
  return (
    <div className={`dashboard ${theme.background}`}>
      <Header />
      <ThemeButton />
      <Section />
      <Advertising />
      <Infobox />
      <Footer />
    </div>
  );
}

export default Dashboard;
