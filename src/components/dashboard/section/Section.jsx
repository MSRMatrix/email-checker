import { useState } from "react";
import "./section.css";
import FormComponent from "./formComponent/FormComponent";
import ResultComponent from "./resultComponent/ResultComponent";

function Section() {

  return (
    <>
      <div className="section">
        <FormComponent />
        <ResultComponent />
      </div>
    </>
  );
}

export default Section;
