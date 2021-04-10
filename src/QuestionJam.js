import React, { useEffect, useState } from "react";
import Question from "./Question";
import SelectBox from "./SelectBox";

const QuestionJam = ({ index, setCurrentQuestion }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    return setIsValid(selectedValue !== null);
  }, [selectedValue, setIsValid]);

  return (
    <Question
      question="What is your favorite type of jam?"
      index={index}
      setCurrentQuestion={setCurrentQuestion}
      isValid={isValid}
    >
      <svg
        className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 412 232"
      >
        <path
          d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
          fill="#648299"
        />
      </svg>
      <SelectBox setValue={setSelectedValue}>
        <option value="strawberry">Strawberry</option>
        <option value="blueberry">Blueberry</option>
        <option value="peach">Peach</option>
        <option value="apricot">Apricot</option>
      </SelectBox>
    </Question>
  );
};

export default QuestionJam;
