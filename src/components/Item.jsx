export default function Item({ image, category, name, price }) {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
        <button>Add to Cart</button>
      </div>
      <div>
        <p>{category}</p>
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
}
