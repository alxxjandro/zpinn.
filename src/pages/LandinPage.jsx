import headerxl from "../assets/header-xl.jpg";
import headermd from "../assets/header-md.jpg";
import headersm from "../assets/header-sm.jpg";
import lading from "../styles/lading.module.css";

function LandingPage() {
  return (
    <div className={lading.header}>
      <div className={lading.overlay}>
        <h1>
          <strong>Timeless</strong> records.
        </h1>
        <h1>
          Curated for <strong>modern</strong> listeners.
        </h1>
        <h2>
          Start browsing our collection and enjoy <strong>up to 50%</strong> off
          your first order
        </h2>
        <button>Shop now</button>
      </div>
    </div>
  );
}

export default LandingPage;
