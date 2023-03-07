import "./index.css";
import Header from "../Header";
import MessageList from "../MessageList";
import Footer from "../Footer";

const Content = () => {
  return (
    <div className="Content">
      <Header />
      <MessageList />
      <Footer />
    </div>
  );
};

export default Content;
