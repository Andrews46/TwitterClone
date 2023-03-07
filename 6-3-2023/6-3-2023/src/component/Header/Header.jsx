import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import "./index.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const hamburgerTrigger = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="Header">
      <div className="Header_up">
        <FiMenu className="Header_Hamburger" onClick={hamburgerTrigger} />
        <HamburgerMenu showMenu={showMenu} />
        <h2>Home</h2>
        <img
          className="iconSparkling"
          src="https://img.icons8.com/material-rounded/256/sparkling.png"
          alt="sparkling"
        />
        <img
          className="LogoTwitter"
          src="https://img.icons8.com/color/256/twitter--v1.png"
          alt="iconTwitter"
        />
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
        <img src="https://img.icons8.com/fluency/256/image.png" alt="image" />
        <img src="https://img.icons8.com/arcade/256/gif.png" alt="gif" />
        <img
          src="https://img.icons8.com/fluency/256/combo-chart.png"
          alt="graph"
        />
      </div>
    </div>
  );
};

export default Header;
