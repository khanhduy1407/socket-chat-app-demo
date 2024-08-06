import { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";
import { InfoBar, Input, Messages, TextContainer } from "../../components";

let socket: any;

const Chat = ({ location }: { location: any }) => {
  const [name, setName] = useState<any>("");
  const [room, setRoom] = useState<any>("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState<any>("");
  const [messages, setMessages] = useState<any>([]);

  const ENDPOINT: string = import.meta.env.LAHM_API_ENDPOINT;

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {
      //
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message: any) => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }: { users: any }) => {
      setUsers(users);
    });
  }, [messages]);

  // function for sending messages
  const sendMessage = (event: any) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />

        <Messages messages={messages} name={name} />

        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
