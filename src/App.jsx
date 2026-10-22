import { Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Order from "./pages/Order";
import Delivery from "./pages/Delivery";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
    </div>
  );
}