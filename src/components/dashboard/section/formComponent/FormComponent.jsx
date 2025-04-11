import { useContext, useState } from "react";
import "./formComponent.css";
import { Result } from "../../../context/Context";
const URL = import.meta.env.VITE_URL;

function FormComponent() {
  const {result, setResult} = useContext(Result)
  async function checkEmails(e) {
    e.preventDefault();
    const emails = e.target.elements.textarea.value.trim().split(/\s+/);

    try {
      const response = await Promise.all(
        emails.map(async (email) => {
          const response = await fetch(`${URL}${email}`);
          const data = await response.json();
          return { email, ...data };
        })
      );

      if(response.ok){
        setResult(response)
        return console.log(`Informations ready!`);
        
      }else{
        console.log(response);
       return console.log(`Error occured!`);
        
      }
      
    } catch (error) {
      console.error("Error checking emails:", error);
    }
  }

  return (
    <form className="formComponent" onSubmit={checkEmails}>
      <legend>Check these Emails</legend>
      <textarea required name="textarea" placeholder="Enter emails separated by space or newlines" />
      <button type="submit">Check</button>
    </form>
  );
}

export default FormComponent;
