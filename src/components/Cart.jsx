import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";
import CartItem from "./CartItem";

export default function Cart() {
  const { cartItems, getTotalQuantity, getTotalPrice, openModal } = useCart();
  return (
    <section className="bg-white rounded-xl p-6 flex flex-col gap-6 w-full xl:self-start">
      <h1 className="text-preset-2 text-red">
        Your Cart ({getTotalQuantity()})
      </h1>
      <ul className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <CartItem key={item.name} item={item} />
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <p className="text-preset-4 text-rose-900">Order Total</p>
        <p className="text-preset-2 text-rose-900">
          {formatCurrency(getTotalPrice())}
        </p>
      </div>
      <div className="bg-rose-50 rounded-lg p-4 flex items-center gap-2 justify-center">
        <img src="./images/icon-carbon-neutral.svg" />
        <p className="text-preset-4 text-rose-900">
          This is <span className="text-preset-4-bold">carbon-neutral</span>{" "}
          delivery
        </p>
      </div>
      {getTotalQuantity() > 0 && (
        <button
          onClick={openModal}
          className="bg-red h-13.25 rounded-full text-white text-preset-3 cursor-pointer hover:bg-amber-700 transition-colors"
        >
          Confirm Order
        </button>
      )}
    </section>
  );
}
