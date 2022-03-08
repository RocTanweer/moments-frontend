import React from "react";

function Input({ type, name, handleChange, value }) {
  return (
    <div className="relative mb-1 w-full">
      <input
        type={type}
        name={name}
        id={name}
        className="peer border-0 border-b-2 w-full border-gray-300 text-gray-900 focus:border-rose-600 focus:outline-none placeholder-transparent"
        autoComplete="off"
        placeholder={`Enter ${name}`}
        onChange={handleChange}
        value={value}
      />
      <label
        htmlFor={name}
        className="absolute pointer-events-none left-0 peer-placeholder-shown:top-1 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-900 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-gray-500 -top-4 text-sm text-gray-500  transition-all"
      >
        {name}
      </label>
    </div>
  );
}

export default Input;
