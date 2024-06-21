import React, { useState } from 'react';

function PhoneInput({handleTextValue}) {
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
    <div 
      className={`flex w-full mt-2 items-center border rounded-md shadow-sm transition duration-300 ease-in-out ${
        isFocused ? 'border-yellow-500' : 'border-gray-300'
      }`}
    >
      <div className=" bg-slate-900 px-3 py-2  rounded-l-md flex items-center">
        <span className="text-gray-500">+91</span>
        
        
      </div>
      <input
        type="tel"
        className="text-white bg-transparent w-full bg-slate-900 px-4 py-2 border-none focus:ring-0 focus:outline-none rounded-r-md"
        placeholder="Mobile Number"
        onFocus={handleFocus}
        onChange={(e)=> handleTextEvent(e)}
        onBlur={handleBlur}
      />
      {/* ... (optional: your clear button) ... */}
    </div>
  );
}

export default PhoneInput;
