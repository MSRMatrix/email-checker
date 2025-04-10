import { useState } from "react";
import "./section.css";
import InputSettings from "./inputSettings/InputSettings";
import FormComponent from "./formComponent/FormComponent";

function Section() {
  const [formElements, setFormElements] = useState(["email"]);

  return (
    <>
      <div className="section">
        <InputSettings 
        formElements={formElements} 
        setFormElements={setFormElements} />

        <FormComponent  
        formElements={formElements} 
        setFormElements={setFormElements} />

      </div>
    </>
  );
}

export default Section;
