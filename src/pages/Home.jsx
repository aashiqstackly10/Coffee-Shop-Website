import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiSliders, FiChevronDown } from "react-icons/fi";
import { coffees, categories } from "../data/coffees";
import CoffeeCard from "../components/CoffeeCard";
import BottomNav from "../components/BottomNav";
import promoImg from "../assets/images/promo.jpg";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All Coffee");
  const [search, setSearch] = useState("");

  const visibleCoffees = coffees.filter((coffee) => {
    const matchCategory =
      activeCategory === "All Coffee" || coffee.category === activeCategory;
    const matchSearch = coffee.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="home">
      <header className="home-header">
        <p className="location-label">Location</p>
        <button className="location-btn">
          Bilzen, Tanjungbalai <FiChevronDown />
        </button>

        <div className="search-row">
          <div className="search-box">
            <FiSearch size={20} />
            <input
              type="text"
              placeholder="Search coffee"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="filter-btn">
            <FiSliders size={20} />
          </button>
        </div>
      </header>

      <section className="promo">
  <img src={promoImg} alt="Promo: Buy one get one free" />
</section>

      <div className="chips">
        {categories.map((cat) => (
          <button
            key={cat}
            className={cat === activeCategory ? "chip active" : "chip"}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="coffee-grid">
        {visibleCoffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            coffee={coffee}
            onClick={() => navigate(`/detail/${coffee.id}`)}
          />
        ))}
      </section>

      <BottomNav />
    </div>
  );
}