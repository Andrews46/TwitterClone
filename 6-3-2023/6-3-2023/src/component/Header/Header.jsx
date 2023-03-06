import "./index.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="HamburgerMenu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="Header_up">
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
    </div>
  );
};

export default Header;
