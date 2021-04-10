import React from 'react';
import './index.scss';
import logo from "./people.png"
function Avatar() {
  return (
    <div className="Avatar flex-center">
        <div className={"background flex-center"}>
            <img className={"img"} alt="oops" src={logo}></img>
        </div>
   </div>
  );
}

export default Avatar;
