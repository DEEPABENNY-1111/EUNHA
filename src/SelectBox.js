import React from "react";

const SelectBox = ({ setValue, children }) => {
  return (
    <select
      onChange={e => setValue(e.value)}
      className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
    >
      <option value={null}>Select one...</option>
      {children}
    </select>
  );
};

export default SelectBox;
