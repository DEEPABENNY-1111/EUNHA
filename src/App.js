import React, { useState } from "react";
import Header from "./Header";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
// import Admin from "./Admin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Survey from "./Survey";

// import "./App.scss";
import StateProvider from "./context";
import ProfileMobile from "./ProfileMobile/Content";

import Questions from "./Questions";

import "./App.css";

function App() {
  const [selected, setSelected] = useState(false);
  const [key, setKey] = useState(0);
  const toggleSelected = (value) => {
    setSelected(value);
  };
  const toggleKey = (value) => {
    setKey(value);
    setSelected(value ? true : false);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
            {/* <h3> it works </h3> */}
          </Route>

          {/* <Route path="/Admin">
            <Header />
            <Admin />
          </Route> */}

          <Route path="/ProfileMobile/:Content">
            <Header backButton="/" />
            <StateProvider.Provider
              value={{ selected, key, toggleSelected, toggleKey }}
            >
              <ProfileMobile />
            </StateProvider.Provider>
          </Route>

          <Route path="/Questions">
            <Header backButton="/" />
            <Questions />
          </Route>

          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>

          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
