import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiChevronLeft, FiHeart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { GiCoffeeBeans, GiMilkCarton, GiCoffeeCup } from "react-icons/gi";
import { coffees } from "../data/coffees";
import "./Detail.css";

const sizes = ["S", "M", "L"];

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const coffee = coffees.find((c) => c.id === Number(id));

  const [size, setSize] = useState("M");
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);

  if (!coffee) return <p style={{ padding: 24 }}>Coffee not found</p>;

  const shortText = coffee.description.slice(0, 118) + ".. ";

  return (
    <div className="detail">
      <header className="detail-top">
        <button className="icon-btn" onClick={() => navigate(-1)}>
          <FiChevronLeft size={24} />
        </button>
        <h2>Detail</h2>
        <button className="icon-btn" onClick={() => setLiked(!liked)}>
          <FiHeart
            size={22}
            fill={liked ? "#ED5151" : "none"}
            color={liked ? "#ED5151" : "#2F2D2C"}
          />
        </button>
      </header>

      <div className="detail-body">
        <img className="detail-img" src={coffee.image} alt={coffee.name} />

        <div className="detail-title-row">
          <div>
            <h1>{coffee.name}</h1>
            <p className="detail-type">Ice/Hot</p>
          </div>
          <div className="feature-icons">
            <span><GiCoffeeCup size={22} /></span>
            <span><GiCoffeeBeans size={22} /></span>
            <span><GiMilkCarton size={22} /></span>
          </div>
        </div>

        <div className="rating-row">
          <AiFillStar color="#FBBE21" size={20} />
          <strong>{coffee.rating}</strong>
          <span>(230)</span>
        </div>

        <hr className="divider" />

        <h3 className="section-title">Description</h3>
        <p className="description">
          {expanded ? coffee.description : shortText}
          <button className="read-more" onClick={() => setExpanded(!expanded)}>
            {expanded ? " Show Less" : "Read More"}
          </button>
        </p>

        <h3 className="section-title">Size</h3>
        <div className="sizes">
          {sizes.map((s) => (
            <button
              key={s}
              className={s === size ? "size-btn active" : "size-btn"}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <footer className="detail-footer">
        <div>
          <p className="price-label">Price</p>
          <p className="price-value">$ {coffee.price.toFixed(2)}</p>
        </div>
        <button
          className="btn-primary buy-btn"
          onClick={() => navigate("/order", { state: { id: coffee.id, size } })}
        >
          Buy Now
        </button>
      </footer>
    </div>
  );
}