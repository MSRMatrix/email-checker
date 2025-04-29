import { useContext, useState } from "react";
import "./formComponent.css";
import { Result, Theme } from "../../../context/Context";
const URL = import.meta.env.VITE_URL;

function FormComponent() {
  const {result, setResult} = useContext(Result)
  const {theme, setTheme} = useContext(Theme)
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
        setResult(response)
        console.log(response);
        
        return console.log(`Informations ready!`);
    } catch (error) {
      console.error("Error checking emails:", error);
    }
  }

  return (
    <form className={`formComponent ${theme.anything}`} onSubmit={checkEmails}>
      <legend>Check these Emails</legend>
      <fieldset>
      <textarea required name="textarea" placeholder="Enter emails separated by space or newlines" className={theme.anything} />
      <button type="submit">Check</button>  
      </fieldset>
    </form>
  );
}

export default FormComponent;
