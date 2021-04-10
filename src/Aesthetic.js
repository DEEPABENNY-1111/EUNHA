import React, { useEffect, useState } from "react";
import Question from "./Question";

const CheckBox = ({ label, addItem, removeItem }) => {
  const setSelected = (checkbox) => {
    if (checkbox.checked) {
      addItem(checkbox.value);
    } else {
      removeItem(checkbox.value);
    }
  };

  return (
    <label className="inline-flex items-center mt-3">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5"
        value={label}
        onChange={(e) => setSelected(e.target)}
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
};

const Aesthetic = ({ index, setCurrentQuestion }) => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [isValid, setIsValid] = useState(true);

  const addItem = (value) => {
    setSelectedValues([...selectedValues, value]);
  };

  const removeItem = (value) => {
    setSelectedValues(selectedValues.filter((selected) => value !== selected));
  };

  useEffect(() => {
    return setIsValid(selectedValues.length > 0);
  }, [selectedValues, setIsValid]);

  return (
    <Question
      question="Your aesthetic?"
      index={index}
      setCurrentQuestion={setCurrentQuestion}
      isValid={isValid}
    >
      <div className="flex flex-col">
        <CheckBox addItem={addItem} removeItem={removeItem} label="Vintage" />
        <CheckBox addItem={addItem} removeItem={removeItem} label="Retro" />
        <CheckBox addItem={addItem} removeItem={removeItem} label="Y2K" />
        <CheckBox addItem={addItem} removeItem={removeItem} label="Grunge" />
        <CheckBox addItem={addItem} removeItem={removeItem} label="Soft Girl" />
        <CheckBox addItem={addItem} removeItem={removeItem} label="Gothic" />
        <CheckBox addItem={addItem} removeItem={removeItem} label="Chic" />
        <CheckBox addItem={addItem} removeItem={removeItem} label="Casual" />
        {/* <CheckBox addItem={addItem} removeItem={removeItem} label="Bracelet" /> */}
      </div>
    </Question>
  );
};

export default Aesthetic;
