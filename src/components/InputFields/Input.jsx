import { inputBox, inputContainer, inputLabel } from "../../assets/styles/Style";

const InputField = ({ label, placeholder, type, id, value, onChange,maxLength }) => {
  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, ""); 

   
    onChange(input);
  };

  const handleChange = (e) => {
    let inputValue = e.target.value;

    if (type === "tel") {
      handlePhoneChange(e);
      return;
    }

    if (type === "number") {
     
      inputValue = inputValue.replace(/[^0-9]/g, ""); 
    }

    onChange(inputValue);
  };

  return (
    <div className={inputContainer}>
      <label htmlFor={id} className={inputLabel}>
        {label}
      </label>
      <input
        type={type}  maxLength={maxLength}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={inputBox}
      />
    </div>
  );
};

export default InputField;
