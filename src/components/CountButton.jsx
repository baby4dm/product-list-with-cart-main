export default function CountButton({ decrease, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group w-5 h-5 border-2 border-white rounded-full flex justify-center items-center hover:scale-110 cursor-pointer hover:bg-white transition-colors"
    >
      {decrease ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          viewBox="0 0 10 2"
          className="fill-white group-hover:fill-red transition-colors"
        >
          <path d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
          className="fill-white group-hover:fill-red transition-colors"
        >
          <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
        </svg>
      )}
    </button>
  );
}
