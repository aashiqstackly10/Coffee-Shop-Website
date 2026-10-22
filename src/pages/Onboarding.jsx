import { useNavigate } from "react-router-dom";
import onboardingImg from "../assets/images/onboarding.jpg";
import "./Onboarding.css";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="onboarding">
      <img className="onboarding-img" src={onboardingImg} alt="Coffee" />

      <div className="onboarding-content">
        <h1>Fall in Love with Coffee in Blissful Delight!</h1>
        <p>Welcome to our cozy coffee corner, where every cup is a delightful for you.</p>
        <button className="btn-primary" onClick={() => navigate("/home")}>
          Get Started
        </button>
      </div>
    </div>
  );
}