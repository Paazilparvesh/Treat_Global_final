import { Input } from 'antd'
import React from 'react'

const InputForm = ({ type, onClick, placeholder, className, label}) => {

    const style = {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    }

  return (
    <div style={style}>
        {label && <label>{label}</label>}
        <Input type={type} onClick={onClick} placeholder={placeholder} className={className} />
    </div>
  )
}

export default InputForm;
