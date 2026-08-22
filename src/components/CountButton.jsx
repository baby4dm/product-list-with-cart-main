export default function CountButton({ img, decrease, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-5 h-5 border-2 border-white rounded-full flex justify-center items-center hover:scale-110 cursor-pointer"
    >
      <img src={img} alt={decrease ? "Decrease" : "Increase"} />
    </div>
  );
}
