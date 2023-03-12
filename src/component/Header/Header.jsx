import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import "./index.css";

const Header = ({ setVisualModal }) => {
  const [showMenu, setShowMenu] = useState(true);

  const hamburgerTrigger = () => {
    setShowMenu(!showMenu);
  };

  const visualModalClick = () => {
    setVisualModal(true);
  };

  return (
    <div className="Header">
      <div className="Header_up">
        <FiMenu className="Header_Hamburger" onClick={hamburgerTrigger} />
        <HamburgerMenu showMenu={showMenu} />
        <h2>Home</h2>
        <div className="HeaderSpark">
          <div className="subTitles1">
            <h3>For you</h3>
          </div>
          <div className="subTitles2">
            <h3>Followed</h3>
          </div>
        </div>
      </div>
      <div className="Header_down">
        <img
          className="Header_profile"
          src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
          alt="profile"
        />
        <input
          className="Header_Input"
          type="text"
          placeholder="What's happening?"
        />
        <div className="HeaderImage">
          <img src="https://img.icons8.com/fluency/256/image.png" alt="image" />

          <img src="https://img.icons8.com/arcade/256/gif.png" alt="gif" />
          <img
            src="https://img.icons8.com/fluency/256/combo-chart.png"
            alt="graph"
          />

          <button onClick={visualModalClick} className="button_Post">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
