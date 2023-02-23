import React, { useState } from "react";

function Card() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.log(`Sending message: ${message}`);
    setMessage("");
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="form-group">
          <textarea
            className="form-control"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
          />
        </div>
        <button className="btn btn-primary" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Card;
