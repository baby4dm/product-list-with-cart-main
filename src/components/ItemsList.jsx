import data from "../data/data.json";
import Item from "./Item";

export default function ItemsList() {
  return (
    <ul>
      {data.map((el) => (
        <Item key={el.name} {...el} />
      ))}
    </ul>
  );
}
