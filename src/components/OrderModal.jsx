import { useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utils/formatCurrency";
import ConfirmedItem from "./ConfirmedOrderItem";
import { createPortal } from "react-dom";

export default function OrderModal() {
  const { cartItems, getTotalPrice, clearCart, modalIsOpen, closeModal } =
    useCart();
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (modalIsOpen && !dialog.open) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [modalIsOpen]);

  function handleStartNewOrder() {
    clearCart();
    closeModal();
  }

  if (!modalIsOpen) return null;
  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={closeModal}
      className="fixed bottom-0 left-0 right-0 top-auto md:bottom-auto md:left-1/2 md:right-auto md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 m-0 w-full max-w-172 max-h-[90vh] rounded-xl overflow-hidden p-0"
    >
      <div className="flex flex-col gap-8 py-10 px-6 overflow-y-auto max-h-[90vh]">
        <div className="flex flex-col gap-6">
          <img className="h-12 w-12" src="/images/icon-order-confirmed.svg" />
          <div>
            <h1 className="text-preset-1 text-rose-900">Order Confirmed</h1>
            <p className="text-preset-3 text-rose-500">
              We hope you enjoy your food!
            </p>
          </div>
        </div>
        <div className="bg-rose-50 rounded-lg p-6">
          <ul>
            {cartItems.map((item) => (
              <ConfirmedItem key={item.name} item={item} />
            ))}
          </ul>
          <div className="flex justify-between items-center pt-6">
            <p className="text-preset-4 text-rose-900">Order Total</p>
            <p className="text-preset-2 text-rose-900">
              {formatCurrency(getTotalPrice())}
            </p>
          </div>
        </div>
        <button
          onClick={handleStartNewOrder}
          className="bg-red h-13.25 rounded-full text-preset-3 text-white shrink-0 hover:bg-amber-700 transition-colors cursor-pointer"
        >
          Start New Order
        </button>
      </div>
    </dialog>,
    document.getElementById("root"),
  );
}
