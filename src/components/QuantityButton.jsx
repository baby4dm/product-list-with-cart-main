import CountButton from "./CountButton";

export default function Quantity({ children, className, onAdd, onRemove }) {
  return (
    <button className={`button-shape  bg-red text-white ${className}`}>
      <CountButton
        onClick={onRemove}
        img="./images/icon-decrement-quantity.svg"
        decrease
      />
      <p className="text-preset-4-bold">{children}</p>
      <CountButton onClick={onAdd} img="./images/icon-increment-quantity.svg" />
    </button>
  );
}
