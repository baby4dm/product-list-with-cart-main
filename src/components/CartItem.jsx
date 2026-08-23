import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";

export default function CartItem({ item }) {
  const { removeFromCart } = useCart();
  return (
    <li className="border-b border-rose-100 flex justify-between items-center">
      <div className="flex flex-col gap-2 pb-4">
        <h2 className="text-preset-4-bold text-rose-900">{item.name}</h2>
        <div className="flex gap-2 justify-start">
          <p className="text-preset-4-bold text-red">{item.quantity}x</p>
          <p className="text-preset-4 text-rose-500">
            @ {formatCurrency(item.price)}
          </p>
          <p className="text-preset-4-bold text-rose-500">
            {formatCurrency(item.price * item.quantity)}
          </p>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.name)}
        className="group w-5 h-5 border-2 border-rose-400 rounded-full flex items-center justify-center hover:scale-110 hover:border-rose-900 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className="fill-rose-400 group-hover:fill-rose-900"
        >
          <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
        </svg>
      </button>
    </li>
  );
}
