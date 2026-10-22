import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiEdit,
  FiFileText,
  FiPercent,
  FiCreditCard,
} from "react-icons/fi";
import { coffees } from "../data/coffees";
import "./Order.css";

const DELIVERY_FEE = 1.0;
const OLD_DELIVERY_FEE = 2.0;

export default function Order() {
  const navigate = useNavigate();
  const location = useLocation();

  const coffeeId = location.state?.id ?? 1;
  const coffee = coffees.find((c) => c.id === coffeeId);

  const [mode, setMode] = useState("Deliver");
  const [qty, setQty] = useState(1);

  const itemsPrice = coffee.price * qty;
  const total = itemsPrice + DELIVERY_FEE;

  return (
    <div className="order">
      <header className="order-top">
        <button className="icon-btn" onClick={() => navigate(-1)}>
          <FiChevronLeft size={24} />
        </button>
        <h2>Order</h2>
        <span className="icon-btn" />
      </header>

      <div className="order-body">
        <div className="toggle">
          {["Deliver", "Pick Up"].map((m) => (
            <button
              key={m}
              className={m === mode ? "toggle-btn active" : "toggle-btn"}
              onClick={() => setMode(m)}
            >
              {m}
            </button>
          ))}
        </div>

        <h3 className="order-title">Delivery Address</h3>
        <p className="address-name">Jl. Kpg Sutoyo</p>
        <p className="address-detail">Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</p>
        <div className="address-actions">
          <button><FiEdit size={13} /> Edit Address</button>
          <button><FiFileText size={13} /> Add Note</button>
        </div>

        <hr className="divider" />

        <div className="order-item">
          <img src={coffee.image} alt={coffee.name} />
          <div className="order-item-info">
            <h4>{coffee.name}</h4>
            <p>{coffee.type}</p>
          </div>
          <div className="qty">
            <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>
        </div>
      </div>

      <div className="section-gap" />

      <div className="order-body">
        <button className="discount-card">
          <span className="discount-left">
            <FiPercent size={18} color="#C67C4E" /> 1 Discount is Applies
          </span>
          <FiChevronRight size={20} />
        </button>

        <h3 className="order-title">Payment Summary</h3>
        <div className="summary-row">
          <span>Price</span>
          <strong>$ {itemsPrice.toFixed(2)}</strong>
        </div>
        <div className="summary-row">
          <span>Delivery Fee</span>
          <span>
            <s className="old-fee">$ {OLD_DELIVERY_FEE.toFixed(1)}</s>{" "}
            <strong>$ {DELIVERY_FEE.toFixed(1)}</strong>
          </span>
        </div>
      </div>

      <footer className="order-footer">
        <div className="payment-row">
          <FiCreditCard size={20} color="#C67C4E" />
          <div>
            <p className="payment-method">Cash/Wallet</p>
            <p className="payment-total">$ {total.toFixed(2)}</p>
          </div>
          <FiChevronDown size={20} className="payment-arrow" />
        </div>
        <button className="btn-primary" onClick={() => navigate("/delivery")}>
          Order
        </button>
      </footer>
    </div>
  );
}