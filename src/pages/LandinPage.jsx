import landing from "../styles/landing.module.css";

function LandingPage() {
  return (
    <div className={landing.header}>
      <div className={landing.overlay}>
        <h1>
          <span className="strong">Timeless</span> records.
        </h1>
        <h1>
          Curated for <span className="strong">modern</span> listeners.
        </h1>
        <h2>
          Start browsing our collection and enjoy{" "}
          <span className="strong">up to 50%</span> off your first order
        </h2>
        <button>Shop now</button>
      </div>
    </div>
  );
}

export default LandingPage;
