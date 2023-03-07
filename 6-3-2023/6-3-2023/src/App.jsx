import SideMenu from "./component/SideMenu";
import Content from "./component/Content";
import SideTrend from "./component/SideTrend";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Content />
      <SideTrend />
    </div>
  );
}

export default App;
