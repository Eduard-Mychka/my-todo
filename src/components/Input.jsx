import React from 'react';

const Input = ({className, value, onChange, placeholder}) => {

  // let inputClassName = 'form-control ';
  // if (className) {
  //   inputClassName += className
  // }
  
  return (
    <input
      className={className}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input;