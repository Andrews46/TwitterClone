import { useState } from "react";
import "./index.css";

const Modal = (setVisualModal) => {
  const [titleInput, setTitleInput] = useState("");
  const [msgInput, setMsgInuput] = useState("");
  const [inputUserId, setInputUserId] = useState("");
  const submitImput = (e) => {
    e.preventDefault();
    fetch("https://dummyjson.com/posts/add", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleInput,
        message: msgInput,
        userId: inputUserId,
      }),
    });
  };
  const visualModalClick = () => {
    setVisualModal(false);
  };
  return (
    <div className="Modal">
      <form onSubmit={submitImput} className="Modal_form">
        <h2>Scrivi il tuo post</h2>
        <input
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          type="text"
          placeholder="Title"
          required
        />
        <input
          value={msgInput}
          onChange={(e) => setMsgInuput(e.target.value)}
          type="text"
          placeholder="Message"
          required
        />
        <input
          value={inputUserId}
          onChange={(e) => setInputUserId(e.target.value)}
          type="number"
          placeholder="UserId"
          required
        />
        <input className="input_submit" submit="submit" value="Add new post" />
        <button onClick={visualModalClick}>submit</button>
      </form>
    </div>
  );
};
export default Modal;
