// @ts-ignore
import ScrollToBottom from "react-scroll-to-bottom";

import "./Messages.css";
import Message from "../Message/Message";

const Messages = ({ messages, name }: { messages: any; name: string }) => {
  //

  return (
    <ScrollToBottom className="messages">
      {messages.map((message: any, index: any) => (
        <div key={index}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
