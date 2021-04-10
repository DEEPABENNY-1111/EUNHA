import React from "react";

const Question = ({
  index,
  setCurrentQuestion,
  question,
  isValid,
  children
}) => {
  const nextQuestion = () => {
    if (isValid) {
      setCurrentQuestion(index + 1);
    }
  };

  return (
    <div className="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-lg">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold mb-4">{question}</h2>
        {!isValid && (
          <div className="mb-4">Please answer the question to continue.</div>
        )}
        <div className="relative inline-flex">{children}</div>
      </div>
      <div className="mt-8 mx-auto">
        <button
          className="border border-teal-500 bg-teal-500 text-white block rounded-sm font-bold py-2 px-6 ml-2 flex items-center"
          onClick={() => nextQuestion()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
