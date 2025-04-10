import Advertising from "./advertising/Advertising";
import "./dashboard.css";
import Header from "./header/Header";
import Section from "./section/Section";

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <Section />
      <Advertising />
    </div>
  );
}

export default Dashboard;
