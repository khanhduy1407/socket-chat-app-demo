import "./Input.css";

const Input = ({
  message,
  setMessage,
  sendMessage,
}: {
  message: string;
  setMessage: any;
  sendMessage: any;
}) => {
  //

  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Nhập tin nhắn..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) => event.key === "Enter" && sendMessage(event)}
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        Gửi
      </button>
    </form>
  );
};

export default Input;
