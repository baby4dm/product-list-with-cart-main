import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";
import Button from "./Button";
import QuantityButton from "./QuantityButton";

export default function Item({ image, category, name, price }) {
  const { addItem, removeItem, findItem } = useCart();
  const item = findItem(name);

  function handleAdd() {
    addItem({ image, category, name, price });
  }

  function handleDecrement() {
    removeItem(name);
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="relative mb-5.5">
        <picture>
          <source media="(min-width: 1024px)" srcSet={image.desktop} />
          <source media="(min-width: 768px)" srcSet={image.tablet} />
          <source media="(max-width: 767px)" srcSet={image.mobile} />
          <img
            src={image.thumbnail}
            alt={name}
            className={`rounded-lg ${item ? "border-2 border-red" : ""}`}
          />
        </picture>
        {item ? (
          <QuantityButton
            onAdd={handleAdd}
            onRemove={handleDecrement}
            className="overlay-button-center justify-around"
          >
            {item.quantity}
          </QuantityButton>
        ) : (
          <Button
            onAdd={handleAdd}
            className="overlay-button-center  justify-evenly hover:bg-rose-100 transition-colors"
          >
            Add to Cart
          </Button>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-preset-4 text-rose-500">{category}</p>
        <h2 className="text-preset-3 text-rose-900">{name}</h2>
        <p className="text-preset-3 text-red">{formatCurrency(price)}</p>
      </div>
    </div>
  );
}
