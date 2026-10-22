import { FiPlus } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

export default function CoffeeCard({ coffee, onClick }) {
  return (
    <div className="coffee-card" onClick={onClick}>
      <div className="card-img-wrap">
        <img src={coffee.image} alt={coffee.name} />
        <span className="card-rating">
          <AiFillStar color="#FBBE21" size={12} /> {coffee.rating}
        </span>
      </div>

      <h3 className="card-name">{coffee.name}</h3>
      <p className="card-type">{coffee.type}</p>

      <div className="card-bottom">
        <span className="card-price">$ {coffee.price.toFixed(2)}</span>
        <button className="card-add">
          <FiPlus size={16} />
        </button>
      </div>
    </div>
  );
}