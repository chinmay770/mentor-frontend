import React from "react";
import "../Layout/styles/Inbox.css"

const Inbox = (props) => {

    const messages = [
        {
          id: 1,
          sender: "Arjun",
          subject: "Meeting reminder",
          body: "Just a friendly reminder that we have a meeting at 2pm today.",
          date: "2022-02-18",
        },
        {
          id: 2,
          sender: "Chinmay",
          subject: "Hello",
          body: "How are you doing today?",
          date: "2022-02-19",
        },
        {
          id: 3,
          sender: "Sakshi",
          subject: "Important information",
          body: "Please see attached document for important information.",
          date: "2022-02-20",
        },
        {
          id: 4,
          sender: "Ayushi",
          subject: "Subjects",
          body: "Somes students wants to change there ILO.",
          date: "2022-02-20",
        },
        {
          id: 5,
          sender: "Dipesh",
          subject: "BE Reports",
          body: "Make announcement for BE report submission.",
          date: "2022-02-20",
        },
        {
          id: 6,
          sender: "Akhilesh",
          subject: "Important information",
          body: "Please see attached document for important information.",
          date: "2022-02-20",
        },
      ];
    
 return(
    <>
            <div className="message-list">
                {messages.map((message) => (
                  <div key={message.id} className="message">
                    <div className="message-sender">{message.sender}</div>
                    <div className="message-subject">{message.subject}</div>
                    <div className="message-body">{message.body}</div>
                    <div className="message-date">{message.date}</div>
                  </div>
                ))}
              </div>
    </>
 );    
}

export default Inbox;