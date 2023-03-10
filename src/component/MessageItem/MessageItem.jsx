import { useState, useEffect } from "react";
import "./index.css";

const MessageItem = ({ messageData }) => {
  const { userId, body } = messageData;
  const [usersDummyJason, setUsersDummyJason] = useState({});

  const [elementChat, setElementChat] = useState(0);
  const [elementArrow, setElementArrow] = useState(0);
  const [elementHeart, setElementHeart] = useState(0);
  const [elementUpload, setElementUpload] = useState(0);
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUsersDummyJason(data));
  }, []);
  const onIncrementChat = () => setElementChat((prev) => prev + 1);
  const onIncrementArrow = () => setElementArrow((prev) => prev + 1);
  const onIncrementHeart = () => setElementHeart((prev) => prev + 1);
  const onIncrementUpload = () => setElementUpload((prev) => prev + 1);
  return (
    <div className="MessageItem">
      <img
        className="MesssageItem_photo"
        src={usersDummyJason.image}
        alt={usersDummyJason.username}
      />

      <div className="MessageItem__content">
        <span className="user">{usersDummyJason.name}</span>
        <span className="email"> {usersDummyJason.email}</span>
        <p className="msgBody">{body}</p>
      </div>
      <div className="MessageItem__content--icons">
        <div className="iconChat">
          <span>{elementChat}</span>
          <img
            onClick={onIncrementChat}
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/256/external-Chat-Bubble-messages-and-chat-those-icons-lineal-those-icons-10.png"
            alt="chat"
          />
        </div>
        <div className="iconArrow">
          <span>{elementArrow}</span>
          <img
            onClick={onIncrementArrow}
            src="https://img.icons8.com/material-sharp/256/sorting-arrows-horizontal.png"
            alt="arrow"
          />
        </div>
        <div className="iconHeart">
          <span>{elementHeart}</span>
          <img
            onClick={onIncrementHeart}
            src="https://img.icons8.com/ios-glyphs/256/hearts.png"
            alt="heart"
          />
        </div>
        <div className="iconUpload">
          <span>{elementUpload}</span>
          <img
            onClick={onIncrementUpload}
            src="https://img.icons8.com/ios/256/upload.png"
            alt="upload"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
