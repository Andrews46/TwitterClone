import TrendItem from "../TrendItem";
import { FaSistrix } from "react-icons/fa";
import "./index.css";

const TrendList = () => {
  const arrayTrends = [
    {
      title: "Trendy technology",
      subTitle: "#Iphone14",
      text: "1117 Tweet",
    },
    {
      title: "Batistuta",
      subTitle: "Sport · Di tendenza",
      text: "",
    },
    {
      title: "Trendy technology",
      subTitle: "#Apple",
      text: "7332 Tweet",
    },
    {
      title: "#Qin Gang",
      subTitle: "Di tendenza nella seguente zona",
      text: "123223 Tweet",
    },
    {
      title: "Calcio",
      subTitle: "Giochi di tendenza",
      text: "11100 Tweet",
    },
  ];
  return (
    <div className="container_TrendList">
      <input className="searchIn" type="text" placeholder="search on twitter" />
      <div className="contain_Trend">
        <h2 className="Trend_Title">Trends for you</h2>
        {arrayTrends.map((item, index) => (
          <TrendItem data={item} key={index} />
        ))}
      </div>
    </div>
  );
};
export default TrendList;
