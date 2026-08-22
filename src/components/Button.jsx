export default function Button({ children, className, onAdd, ...props }) {
  return (
    <button
      onClick={onAdd}
      {...props}
      className={`button-shape border-2 border-rose-400 bg-white cursor-pointer ${className}`}
    >
      <img
        className="w-5 h-5"
        src="/images/icon-add-to-cart.svg"
        alt="Add to Cart"
      />
      <p className="text-preset-4-bold">{children}</p>
    </button>
  );
}
