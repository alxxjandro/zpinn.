import landing from "../styles/landing.module.css";

function LandingVinyl({ imgsrc, name, info, year }) {
  return (
    <div className={landing.card}>
      <img className={landing.img} src={imgsrc} alt={name + " album cover"} />
      <h1>{name.split("-")[1]}</h1>
      <h2>
        {name.split("-")[0]} • {year} • {info}
      </h2>
    </div>
  );
}

export default LandingVinyl;
