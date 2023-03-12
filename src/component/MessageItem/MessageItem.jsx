import { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { BiMessageRounded } from "react-icons/bi";
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
          <BiMessageRounded onClick={onIncrementChat} />
        </div>
        <div className="iconArrow">
          <span>{elementArrow}</span>
          <RiArrowLeftRightFill
            className="iconArrow"
            onClick={onIncrementArrow}
          />
        </div>
        <div className="iconHeart">
          <span>{elementHeart}</span>
          <AiOutlineHeart className="iconHeart" onClick={onIncrementHeart} />
        </div>
        <div className="iconUpload">
          <span>{elementUpload}</span>
          <BsUpload onClick={onIncrementUpload} />
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
