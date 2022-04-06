import React, { useState } from "react";
import DisplayMessages from "./Components/DisplayMessages/DisplayMessages";
import AddMessageForm from "./Components/AddMessage/AddMessageForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


function App() {
  const [messages, setMessages] = useState([
    {
      name: "Ron Weasley",
      post: "You asked us a question and she knows the answer! Why ask if you don't want to be told?",
    },
    {
      name: "Peeves",
      post: "Oh, most think he's barking, the potty wee lad, but some are more kindly and think he's just sad, but Peevesy knows better and says that he's mad.",
    },
    {
      name: "Hermione Granger",
      post: "Now if you two don’t mind, I’m going to bed before either of you come up with another clever idea to get us killed - or worse, expelled.",
    },
  ]);

  function addNewMessage(message) {
    let tempMessages = [...messages, message];

    setMessages(tempMessages);
  }

  return (
    <div className="container">
          <div className="row">
            <h3 style={{"margin-bottom": "1em"}}>SocialFeed</h3>
          <div className="col-md-6">
            <div className="border-box">
            <AddMessageForm addNewMessageProperty={addNewMessage} />
            </div>
            </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="border-box">
          <DisplayMessages parentMessages={messages} />
            </div>
        </div>
        </div>

    </div>
  );
}

export default App;
