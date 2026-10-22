import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiPhone, FiCrosshair, FiMapPin } from "react-icons/fi";
import { MdDeliveryDining } from "react-icons/md";
import mapImg from "../assets/images/map.jpg";
import courierImg from "../assets/images/courier.jpg";
import "./Delivery.css";

export default function Delivery() {
  const navigate = useNavigate();

  return (
    <div className="delivery">
      <div className="map" style={{ backgroundImage: `url(${mapImg})` }}>
        <button className="map-btn left" onClick={() => navigate("/home")}>
          <FiChevronLeft size={22} />
        </button>
        <button className="map-btn right">
          <FiCrosshair size={20} color="#C67C4E" />
        </button>

        <svg className="route" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polyline
            points="22,48 28,48 28,40 65,40 65,62"
            fill="none"
            stroke="#C67C4E"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <span className="marker pin">
          <FiMapPin size={20} color="#C67C4E" />
        </span>
        <span className="marker scooter">
          <MdDeliveryDining size={20} color="#C67C4E" />
        </span>
      </div>

      <section className="sheet">
        <div className="sheet-handle" />

        <h2>10 minutes left</h2>
        <p className="sheet-sub">
          Delivery to <strong>Jl. Kpg Sutoyo</strong>
        </p>

        <div className="progress">
          <span className="done" />
          <span className="done" />
          <span className="done" />
          <span />
        </div>

        <div className="status-card">
          <span className="status-icon">
            <MdDeliveryDining size={28} color="#C67C4E" />
          </span>
          <div>
            <h4>Delivered your order</h4>
            <p>We will deliver your goods to you in the shortes possible time.</p>
          </div>
        </div>

        <div className="courier">
          <img src={courierImg} alt="Courier" />
          <div className="courier-info">
            <h4>Brooklyn Simmons</h4>
            <p>Personal Courier</p>
          </div>
          <button className="call-btn">
            <FiPhone size={20} color="#C67C4E" />
          </button>
        </div>
      </section>
    </div>
  );
}