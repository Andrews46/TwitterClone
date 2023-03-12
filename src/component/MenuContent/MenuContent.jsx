import "./index.css";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiHome7Fill } from "react-icons/ri";
import { HiOutlineHashtag } from "react-icons/hi";
import { FiBookmark } from "react-icons/fi";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

const MenuContent = () => {
  return (
    <ul>
      <li>
        <img
          className="iconLogo"
          src="https://img.icons8.com/color/256/twitter--v1.png"
          alt="twitter logo"
        />
      </li>
      <li>
        <RiHome7Fill className="iconHome" />
        <p>Home</p>
      </li>
      <li>
        <HiOutlineHashtag className="iconEplore" />
        <p>Explore</p>
      </li>
      <li>
        <IoMdNotificationsOutline className="iconNotification" />
        <p>Notifications</p>
      </li>

      <li>
        <MdOutlineMailOutline className="iconMessage" />
        <p>Messages</p>
      </li>
      <li>
        <FiBookmark className="iconBookmarks" />
        <p>Bookmarks</p>
      </li>
      <li>
        <CgProfile className="iconProfile" />
        <p>Profilo</p>
      </li>
      <li>
        <HiOutlineDotsCircleHorizontal className="iconDot" />
        <p>Altro</p>
      </li>
    </ul>
  );
};

export default MenuContent;
