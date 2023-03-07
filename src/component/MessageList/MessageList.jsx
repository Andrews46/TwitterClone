import messageList from "../Mock/messageList";
import MessageItem from "../MessageItem";
import "./index.css";

const MessageList = () => {
  return (
    <div className="MessageList">
      {messageList.map((message) => (
        <MessageItem messageData={message} />
      ))}
    </div>
  );
};

export default MessageList;
