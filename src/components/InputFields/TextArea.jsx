import {  inputContainer, inputLabel, textarea } from "../../assets/styles/Style";

const TextArea = ({ label, placeholder, id, value, rows = 4, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className={inputContainer}>
      <label htmlFor={id} className={inputLabel}>
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        rows={rows}
        onChange={handleChange}
        className={textarea}
      />
    </div>
  );
};

export default TextArea;
