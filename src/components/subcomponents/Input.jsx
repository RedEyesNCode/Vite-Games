import React, { useState } from 'react';

function Input({ type = "text", handleTextValue, placeholder, ...props }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleTextEvent = (e) => {
    handleTextValue(e.target.value);
  }
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={` w-[270px] mt-2  flex items-center border rounded-md shadow-sm transition duration-300  ease-in-out ${isFocused ? 'border-yellow-500' : 'border-gray-300'}`}>
      <input
        type={type}
        className="text-white w-full bg-slate-900 px-4 py-2 border-none focus:ring-0 focus:outline-none rounded-md"
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => handleTextEvent(e)}
        {...props} // Spread additional props (e.g., value, onChange)
      />
    </div>
  );
}

export default Input;
