import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function addItem(product) {
    setCartItems((prev) => {
      const existingItem = prev.find((it) => it.name === product.name);
      if (existingItem) {
        return prev.map((it) => {
          return it.name === product.name
            ? { ...it, quantity: it.quantity + 1 }
            : it;
        });
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeItem(productName) {
    setCartItems((prev) => {
      const existingItem = prev.find((it) => it.name === productName);
      if (existingItem.quantity > 1) {
        return prev.map((it) => {
          return productName === it.name
            ? { ...it, quantity: it.quantity - 1 }
            : it;
        });
      }

      return prev.filter((it) => it.name !== productName);
    });
  }

  function removeFromCart(productName) {
    setCartItems((prev) => prev.filter((it) => it.name !== productName));
  }

  function clearCart() {
    setCartItems([]);
  }

  function getTotalPrice() {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  function getTotalQuantity() {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  function findItem(productName) {
    return cartItems.find((it) => it.name === productName);
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        removeFromCart,
        clearCart,
        getTotalPrice,
        findItem,
        getTotalQuantity,
        openModal,
        closeModal,
        modalIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
