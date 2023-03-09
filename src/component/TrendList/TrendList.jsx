import list from "../Mock/list";
import TrendItem from "../TrendItem";

import "./index.css";

const TrendList = () => {
  return (
    <div className="container_TrendList">
      <input
        className="searchIn"
        type="text"
        placeholder=" 🔍 search on twitter"
      />
      <div className="contain_Trend">
        <h2 className="Trend_Title">Trends for you</h2>
        {list.map((item) => (
          <TrendItem data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default TrendList;
