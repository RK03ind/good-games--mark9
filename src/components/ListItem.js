import "./ListItem.css";
const ListItem = (props) => {
  return (
    <div className="list-item">
      <h3>{props.title}</h3>
      <span>IGN Rating: {props.rating}/10</span>
    </div>
  );
};

export default ListItem;
