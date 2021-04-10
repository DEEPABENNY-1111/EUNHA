import React, { useContext } from "react";
import "./info.scss";
import StateContext from "../../context";
function Info(props) {
  const State = useContext(StateContext);
  const Content = () => {
    return (
      <div className="Info">
        <p className="InfoWords">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    );
  };
  return State.selected ? <Content /> : <></>;
}

export default Info;
