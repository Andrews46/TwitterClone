import { useState } from "react";
import "./index.css";
import Header from "../Header";
import Modal from "../Modal";
import MessageList from "../MessageList";
import Footer from "../Footer";

const Content = () => {
  const [visualModal, setVisualModal] = useState(false);
  return (
    <div className="Content">
      {visualModal && <Modal setVisualModal={setVisualModal} />}
      <Header setVisualModal={setVisualModal} />
      <MessageList />
      <Footer />
    </div>
  );
};

export default Content;
