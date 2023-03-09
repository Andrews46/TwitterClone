import { useRef } from "react";
import MenuContent from "../MenuContent";
import "./index.css";

//Esercizio 9-3-2023 utilizzo di useRef per visualizzare nel
// button tweet con un alert quante volte viene cliccato

const SideMenu = () => {
  const sideRef = useRef(0);
  const tweet = () => {
    sideRef.current = sideRef.current + 1;
    alert(`${sideRef.current} To tweet `);
  };
  return (
    <div className="SideMenu">
      <MenuContent />
      <button onClick={tweet}>Tweet</button>
    </div>
  );
};

export default SideMenu;
