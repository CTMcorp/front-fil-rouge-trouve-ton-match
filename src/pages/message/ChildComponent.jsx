import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
//import { useSubscription } from "react-stomp-hooks";
import { useEffect, useMemo, useRef, useState } from "react";

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
    const token = sessionStorage.getItem("accessToken");
    console.log(token);

    const sockclient = new SockJS("http://localhost:8080/ws");
    const stomp = Stomp.over(sockclient);
    const header = {
      Authorization: `Bearer ${token}`,
    };
    stomp.connect(header, () => {
      console.log("Connected");
    });
    stomp.onclose = () => {
      console.log("Connection closed");
    };
    stomp.onerror = (error) => {
      console.log("Connection error", error);
    };
    return stomp;
  }, []);

  // useSubscription("/getMessages", (message) => setMessages(message.body));

  useEffect(() => {
    setLoader(true);
    client.connect({}, () => {
      client.subscribe("/getMessages", (e) => {
        console.log("Receive Message", e.body);
        setMessages(e.body);
      });
      client.subscribe("/newMessages", (e) => {
        console.log("New Message", e.body);
      });
      client.subscribe("/deleteMessages", (e) => {
        console.log("Delete Message", e.body);
      });
      client.subscribe("/updateMessages", (e) => {
        console.log("Update Message", e.body);
      });
    });
  }, [client, loadMessage, setMessages, setLoader]);

  const inputMessage = useRef();

  const conversationId = "6cb4f221-e32c-4a51-bff8-3a99ba465d04";

  return (
    <div>
      <div>
        <button
          onClick={() =>
            client.send(`/requestMessages/${conversationId}`, {}, "{}")
          }
        >
          Request Messages
        </button>
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
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="message">Message</label>
        <input name="message" ref={inputMessage} />
        <button
          onClick={() =>
            client.send(
              `/send/${conversationId}`,
              {},
              inputMessage.current.value
            )
          }
        >
          envoyer
        </button>
      </form>
    </div>
  );
};

export default ChildComponent;
