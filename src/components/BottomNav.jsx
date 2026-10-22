import { FiHome, FiHeart, FiShoppingBag, FiBell } from "react-icons/fi";

const items = [FiHome, FiHeart, FiShoppingBag, FiBell];

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {items.map((Icon, index) => (
        <button key={index} className={index === 0 ? "nav-item active" : "nav-item"}>
          <Icon size={22} />
          {index === 0 && <span className="nav-dot" />}
        </button>
      ))}
    </nav>
  );
}