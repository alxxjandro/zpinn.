import { useEffect, useState } from "react";
import shop from "../styles/shop.module.css";
import { useOutletContext } from "react-router-dom";
import LandingVinyl from "../components/LandingVinyl";

function Shop() {
  const { setAlbums, albums, loading, error } = useOutletContext();
  const sortingOptions = ["Entry", "Genre", "Year", "Price", "Likes"];
  const [filter, setFilter] = useState("Entry");
  const [sortedAlbums, setSortedAlbums] = useState([]);

  useEffect(() => {
    if (albums) {
      setSortedAlbums(filterAlbums(albums, filter));
    }
  }, [albums, filter]);

  function filterAlbums(data, criteria) {
    const copy = [...data];
    switch (criteria) {
      case "Year":
        return copy.sort((a, b) => b.year - a.year);
      case "Genre":
        return copy.sort((a, b) => a.genre.localeCompare(b.genre));
      case "Price":
        return copy.sort((a, b) => b.price - a.price);
      case "Likes":
        return copy.filter((a) => a.like === true);
      case "Entry":
      default:
        return copy;
    }
  }

  function handleLike(id) {
    const updated = albums.map((a) =>
      a.id === id ? { ...a, like: !a.like } : a,
    );
    localStorage.setItem("albums", JSON.stringify(updated)); //update localstorage
    setAlbums(updated);
  }

  return (
    <div className={shop.shop}>
      <div className={shop.top}>
        <h1>
          Your next favorite album is <span className="strong">here.</span>
        </h1>
        <div>
          <label htmlFor="sortingValues">Sort by</label>
          <select
            onChange={(e) => setFilter(e.target.value)}
            name="sortingValues"
            id="sortingValues"
          >
            {sortingOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        {loading && <h1>loading...</h1>}
        {error && (
          <h2>
            Oops! Something went wrong while loading the albums, please try
            again in a few minutes...
          </h2>
        )}
      </div>
      <div className={shop.cards}>
        {sortedAlbums &&
          sortedAlbums.map((a) => (
            <LandingVinyl
              key={a.id}
              imgsrc={a.imgsrc}
              artist={a.artist}
              album={a.album}
              year={a.year}
              genre={a.genre}
              header={a.header}
              shop={true}
              price={a.price}
              like={a.like}
              handleLike={() => handleLike(a.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default Shop;
