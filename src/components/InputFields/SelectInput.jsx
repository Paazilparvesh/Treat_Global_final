import { inputBox, inputContainer, inputLabel } from "../../assets/styles/Style";

const SelectInput = ({ label, id, value, options, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={inputContainer}>
      <label htmlFor={id} className={inputLabel}>
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={handleChange}
        className={inputBox}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value} className="text-[#6D9C54]">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
