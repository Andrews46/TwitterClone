import { useState, useEffect } from "react";

import MessageItem from "../MessageItem";
import "./index.css";

const MessageList = () => {
  const [postDummy, setPostDummy] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPostDummy(data.posts));
  }, []);

  return (
    <div className="MessageList">
      {postDummy.map((item) => (
        <MessageItem messageData={item} key={item.id} />
      ))}
    </div>
  );
};

export default MessageList;
