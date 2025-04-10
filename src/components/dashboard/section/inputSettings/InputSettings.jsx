import "./inputSettings.css";

function InputSettings({formElements, setFormElements}) {

    const handleAddInput = (e) => {
        e.preventDefault();
        if (formElements.length < 10) {
          setFormElements([...formElements, ""]);
        }
      };
    
      const handleRemoveInput = (e) => {
        e.preventDefault();
        if (formElements.length > 1) {
          setFormElements(formElements.slice(0, -1));
        }
      };

  return (
    <>
     <div className="input-settings">
          <div>
            <h2>Add Input</h2>
            <button onClick={handleAddInput} disabled={formElements.length >= 10}>
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <div>
            <h2>Remove Input</h2>
            <button onClick={handleRemoveInput} disabled={formElements.length <= 1}>
              <i className="fa-solid fa-minus"></i>
            </button>
          </div>
        </div>
    </>
  );
}

export default InputSettings;
