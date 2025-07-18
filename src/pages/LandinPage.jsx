import landing from "../styles/landing.module.css";
import LandingVinyl from "../components/LandingVinyl";
import { useOutletContext } from "react-router-dom";
import bgxl from "../assets/bg-xl.jpg";
import bgmd from "../assets/bg-md.jpg";
import bgsm from "../assets/bg-sm.jpg";

function LandingPage() {
  const { albums,loading } = useOutletContext();
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
          {loading && (
            <h1>loading...</h1>
          )}
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
        <div className={landing.soon}>
          <img
            srcSet={`
                    ${bgsm} 480w,
                    ${bgmd} 768w,
                    ${bgxl} 1024w
                `}
            sizes="
                    (max-width: 600px) 100vw,
                    (max-width: 1024px) 90vw,
                    1024px
                "
            src={bgxl}
            alt="a pretty cool collection of vinyls"
            className={landing.soonImg}
          />
          <div className={landing.soonContent}>
            hola
          </div>
      </div>
    </>
  );
}

export default LandingPage;
