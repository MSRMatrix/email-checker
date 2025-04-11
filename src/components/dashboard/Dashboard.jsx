import Advertising from "./advertising/Advertising";
import "./dashboard.css";
import Header from "./header/Header";
import Section from "./section/Section";
import ThemeButton from "./themeButton/ThemeButton";

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <ThemeButton />
      <Section />
      <Advertising />
    </div>
  );
}

export default Dashboard;
