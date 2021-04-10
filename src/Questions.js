import React, { useState } from "react";
import QuestionJam from "./QuestionJam";
import QuestionRestaurant from "./QuestionRestaurant";
import QuestionGiftCard from "./QuestionGiftCard";
import Accessories from "./Accessories";
import GenerateCode from "./GenerateCode";
import Budget from "./budget";
import Aesthetic from "./Aesthetic";
import Colour from "./Colour";
import Footwear from "./Footwear";
import Hollywood from "./Hollywood";
import Funky from "./Funky";
import Spectrum from "./Spectrum";

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="container mx-auto h-full flex justify-center items-center">
      {/* {currentQuestion === 0 && (
        <QuestionJam
          index={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}
      {currentQuestion === 1 && (
        <QuestionRestaurant
          index={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}
      {currentQuestion === 2 && (
        <QuestionGiftCard
          index={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      )} */}
      {currentQuestion === 0 && (
        <Budget
          index={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}
      {currentQuestion === 1 && (
        <Aesthetic
          index={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}

      {currentQuestion === 2 && (
        <Colour
          index={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}
      {currentQuestion === 3 && (
        <Footwear
          index={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}
      {currentQuestion === 4 && (
        <Accessories
          index={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}
      {currentQuestion === 5 && (
        <Hollywood
          index={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}
      {currentQuestion === 6 && (
        <Funky
          index={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}
      {currentQuestion === 7 && (
        <Spectrum
          index={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      )}
      {currentQuestion >= 8 && <GenerateCode />}
    </div>
  );
};

export default Questions;
