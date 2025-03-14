import { Select } from "antd";
import React from "react";

const SelectForm = ({ value, onChange, options = [], placeholder, label, className }) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  };

  return (
    <div style={style}>
      {label && <label>{label}</label>}
      <Select
        showSearch
        value={value}
        className={className}
        placeholder={placeholder}
        optionFilterProp="label"
        onChange={onChange}
        options={options.map((option) => ({
          value: option.value,
          label: option.value,
        }))}
      />
    </div>
  );
};

export default SelectForm;
