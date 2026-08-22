import { formatCurrency } from "../utils/formatCurrency";

export default function ConfirmedItem({ item }) {
  return (
    <li className="flex justify-between items-center border-b border-b-rose-100 py-4">
      <div className="flex justify-between items-center gap-4">
        <img className="h-12 w-12 rounded-sm" src={item.image.thumbnail} />
        <div className="flex flex-col gap-2">
          <h2 className="text-preset-4-bold">{item.name}</h2>
          <div className="flex gap-2">
            <p className="text-preset-4-bold text-red">{item.quantity}x</p>
            <p className="text-preset-4 text-rose-500">
              @ {formatCurrency(item.price)}
            </p>
          </div>
        </div>
      </div>
      <p className="text-preset-3 text-rose-900">
        {formatCurrency(item.price * item.quantity)}
      </p>
    </li>
  );
}
