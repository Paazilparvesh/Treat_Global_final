import { inputBox, inputContainer, inputLabel } from "../../assets/styles/Style";
import { Icon } from '@iconify/react';

const FileInput = ({ label, id, value, onChange }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <div className={inputContainer}>
      <label htmlFor={id} className={inputLabel}>
        {label}
      </label>
      <div className="relative flex items-center w-full">
        <input
          type="file"
          id={id}
          onChange={handleChange}
          className={`${inputBox} opacity-0 absolute left-0 top-0 w-full h-full cursor-pointer`}
        />
        <div
          className={`${inputBox} flex items-center gap-2 cursor-pointer`}
          onClick={() => document.getElementById(id)?.click()}
        >
          <Icon icon="mdi:upload" className="text-[#666666] text-lg" />
          {value ? value.name : "Choose a file"}
        </div>
      </div>
    </div>
  );
};

export default FileInput;
