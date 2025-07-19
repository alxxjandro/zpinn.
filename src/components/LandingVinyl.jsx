import landing from "../styles/landing.module.css";

function LandingVinyl({ imgsrc, artist, album, year, genre, header }) {
  return (
    <div className={landing.card}>
      <img className={landing.img} src={imgsrc} alt={album + " album cover"} />
      <h1>{album}</h1>
      <h2>
        {artist} • {year} • {genre}
      </h2>
    </div>
  );
}

export default LandingVinyl;
