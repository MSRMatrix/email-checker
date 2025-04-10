import "./formComponent.css";

function FormComponent({formElements, setFormElements}) {
  return (
        <form className="formComponent">
          <legend>Check these Emails</legend>
          {formElements.map((_, index) => (
            <fieldset key={index}>
              <legend>Email #{index + 1}</legend>
              <input type="email" name={`email-${index}`} />
            </fieldset>
          ))}
        </form>

  );
}

export default FormComponent;
