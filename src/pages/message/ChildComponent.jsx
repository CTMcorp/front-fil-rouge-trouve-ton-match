import React, { useState } from "react";
import { useSubscription } from "react-stomp-hooks";

const ChildComponent = () => {
  const [message, setMessage] = useState("");
  useSubscription("/topic/reply"),
    (message) => {
      setMessage(message.body);
    };

  return (
    <div>
      <div>The broadcast message from websocket brocker is {message}</div>
    </div>
  );
};

export default ChildComponent;
