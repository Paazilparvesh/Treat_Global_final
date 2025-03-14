import React from "react";

const Button = ({ label, icon, onClick, type, className }) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {icon && <span className="icon">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
