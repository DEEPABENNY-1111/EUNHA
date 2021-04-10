import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
// import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";
// import logo from "./Icons/crunchyroll.svg";
import logo from "./Icons/snapchat.svg";
// import Admin from "./Admin";
import InfoIcon from "@material-ui/icons/Info";

// import Questions from "./Questions";
import "./Question.css";

function Header({ backButton }) {
  const history = useHistory();
  // const hist = useHistory();

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon
            fontSize="large"
            className="header__icon"
          ></ArrowBackIosIcon>
        </IconButton>
      ) : (
        <IconButton>
          <Link to="/ProfileMobile/:Content">
            <PersonIcon className="header__icon" fontSize="large" />
          </Link>
          <Link to="/Questions " className="bg-blue-100 h-screen">
            <InfoIcon className="header__icon survey" />
          </Link>
        </IconButton>
      )}

      <Link to="/">
        <img className="header__logo" src={logo} alt="myntra logo"></img>
      </Link>

      {/* <Link to="/ProfileMobile/:Content">
        <InfoIcon className="header__icon survey" />
      </Link> */}

      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
