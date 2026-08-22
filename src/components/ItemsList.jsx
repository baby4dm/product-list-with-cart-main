import data from "../data/data.json";
import Item from "./Item";

export default function ItemsList() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-rose-900 text-preset-1">Desserts</h1>
      <ul className="grid gap-6 md:grid-cols-3 md:gap-y-8">
        {data.map((el) => (
          <Item key={el.name} {...el} />
        ))}
      </ul>
    </section>
  );
}
