import React, { useState, useEffect, useContext } from "react";
import "./index.scss";
import StateContext from "../../context";
function Option(props) {
  const [animation, setAnimation] = useState("");
  const [clear, setClear] = useState(true);
  const State = useContext(StateContext);
  useEffect(() => {
    if (State.key > 0) {
      if (State.key !== props.keey) {
        setAnimation("faded");
        setTimeout(() => {
          setClear(false);
        }, 230);
      } else {
        setTimeout(() => {
          setAnimation("selected");
        }, 230);
      }
    } else {
      setAnimation("");
      setClear(true);
    }
  }, [State.key]);

  useEffect(() => {
    console.log(State);
  }, [State]);
  const click = (value) => {
    State.toggleKey(value);
  };
  const back = () => {
    State.toggleKey(0);
  };
  const Boton = () => {
    return (
      <div className={"closeBox"}>
        <button className={"close"}>
          {animation === "selected" ? (
            <svg
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
          ) : (
            <p className="cross">+</p>
          )}
        </button>
      </div>
    );
  };
  return State.key === 0 || clear ? (
    <div
      className={`option fade ${animation}`}
      onClick={() => click(animation === "selected" ? 0 : props.keey)}
    >
      <Boton />
      {props.children}
    </div>
  ) : (
    <></>
  );
}

export default Option;
