import landing from "../styles/landing.module.css";
import LandingVinyl from "../components/LandingVinyl";
import { useOutletContext } from "react-router-dom";

function LandingPage() {
  const { albums } = useOutletContext();
  console.log(albums);

  return (
    <>
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
      <div className={landing.favorites}>
        <h1>
          Crowd favorites,{" "}
          <span className="strong">no algorithms needed.</span>{" "}
        </h1>
        <div className={landing.cards}>
          {albums &&
            albums.map((a) => (
              <LandingVinyl
                key={a.id}
                imgsrc={a.cover_image}
                name={a.title}
                info={a.genre[0]}
                year={a.year}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default LandingPage;
