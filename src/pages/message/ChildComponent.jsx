import { Stomp } from "@stomp/stompjs";
import React, { useEffect, useMemo, useState } from "react";
import { useSubscription } from "react-stomp-hooks";

const ChildComponent = () => {
  //   const [message, setMessage] = useState("");
  //   useSubscription("/topic/reply"),
  //     (message) => {
  //       setMessage(message.body);
  //     };

  const [loadMessage, setLoadMessages] = useState(false);
  const [loader, setLoader] = useState(false);
  const [messages, setMessages] = useState([]);
  const client = useMemo(() => {
    return Stomp.client("ws://localhost:8080/ws");
  }, []);

  useEffect(() => {
    setLoader(true);
    client.connect({}, () => {
      client.subscribe("/getMessages", (e) => {
        console.log("Receive Message", e.body);
        setMessages(JSON.parse(e.body));
      });
      client.subscribe("/updateMessages", (e) => {
        console.log("Update Message", e.body);
      });
      client.subscribe("/send", (e) => {
        console.log("message sent", e.body);
      });
    });
  }, [client, loadMessage, setMessages, setLoader]);

  return (
    <div>
      <div>
        <button
          onClick={() => client.send("/requestMessages", {}, "{}")}
          style={{ width: 10 }}
        ></button>
      </div>
      <ul>
        {messages.map((message) => (
          <li key={message._id}>
            <p>{message.sender}</p>
            <p>{message.dest}</p>
            <p>{message.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;
