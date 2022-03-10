import React, { forwardRef } from 'react'

export const Input = forwardRef(({onChange, onKeyDown, index, value, disabled, customClass, className},ref) => {


  return (
    <div className="p-1">
    <input
      disabled={disabled}
      value={value}
      onKeyDown={onKeyDown}
      onChange={onChange}
      ref={ref}
      type="text"
      name="price"
      id={index}
      maxLength={1}
      className={`focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-400 rounded-md w-12 h-12 border text-center ${customClass} ${className}`}
    />
  </div>
  )
})