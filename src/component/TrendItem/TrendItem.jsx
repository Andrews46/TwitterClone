import "./index.css";

const TrendItem = ({ data }) => {
  return (
    <div>
      <h4>{data.subTitle}</h4>
      <h3>{data.title}</h3>
      <h4>{data.text}</h4>
    </div>
  );
};
export default TrendItem;
