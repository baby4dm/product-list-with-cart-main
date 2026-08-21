import addToCart from "../assets/images/icon-add-to-cart.svg";

export default function Button({ children }) {
  return (
    <button>
      <img src={addToCart} alt="Add to Cart" />
      <p>{children}</p>
    </button>
  );
}
