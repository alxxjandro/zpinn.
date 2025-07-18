import landing from "../styles/landing.module.css";
import LandingVinyl from "../components/LandingVinyl";
import { useOutletContext } from "react-router-dom";
import bgxl from "../assets/bg-xl.jpg";
import bgmd from "../assets/bg-md.jpg";
import bgsm from "../assets/bg-sm.jpg";

function LandingPage() {
  const { albums, loading } = useOutletContext();
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
          {loading && <h1>loading...</h1>}
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
        <h2 className={landing.credits}>
          Photo by{" "}
          <a
            target="blank"
            href="https://unsplash.com/photos/black-vinyl-record-on-black-vinyl-record-fi3_lDi3qPE"
          >
            Eric Krull
          </a>{" "}
          on{" "}
          <a target="blank" href="https://unsplash.com/">
            Unsplash
          </a>{" "}
        </h2>
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
          <h1>
            <span>zpinn</span>ing soon...
          </h1>
          <h2>
            <span>zpinn.</span> is not a real store it's a concept made to
            explore design, music, and experience. <br /> The records don't
            spin. <span>Yet.</span>
          </h2>
          <h2>
            Made for practice. <span>Inspired</span> by records. Built as part
            of <span>The Odin Project's</span> curriculum.
          </h2>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
