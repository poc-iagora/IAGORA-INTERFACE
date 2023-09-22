import "./chat.css";

import React from "react";
import {Chat} from "../chat/chat";

const ChatPage = () => {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
              <Chat />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatPage;
