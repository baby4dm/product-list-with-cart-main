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
        className="w-5 h-5 border-2 border-rose-400 rounded-full flex items-center justify-center hover:scale-110 cursor-pointer"
      >
        <img src="/images/icon-remove-item.svg" />
      </button>
    </li>
  );
}
