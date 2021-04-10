import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
import Chats from "./Chats";
import Chat from "./Chat";

function ChatScreen({ name, message, profilePic, timestamp }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Mark",
      image:
        "https://images.unsplash.com/photo-1539664283826-8747535c24a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      message: "what's up ❤"
    },
    {
      message: "Hi, how's you?"
    },
    {
      name: "Mark",
      image:
        "https://images.unsplash.com/photo-1539664283826-8747535c24a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      message: "I'm fine"
    },
    {
      message: "😊"
    }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timeStamp">
        YOU MATCHED WITH MARK {name} ON 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="type a msg..."
          type="text"
        />

        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>

        {/* <div id="container">
                    <button onClick={handleSend} class="learn-more">
                        <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">SEND</span>
                    </button>
                </div> */}
      </form>
    </div>
  );
}

export default ChatScreen;
