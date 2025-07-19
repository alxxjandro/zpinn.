import { useEffect, useState } from "react";
import shop from "../styles/shop.module.css";

function Shop({ albums, loading, error }) {
  const sortingOptions = ["entry", "genre", "year", "price", "liked"];
  const [filter, setFilter] = useState("entry");

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <div className={shop.shop}>
      <div className={shop.top}>
        <h1>
          Your next favorite album is <span>here.</span>
        </h1>
        {loading && <h1>loading...</h1>}
        {error && (
          <h2>
            Oops! Something went wrong while loading the albums, please try
            again in a few minutes...
          </h2>
        )}
        <div>
          <label htmlFor="sortingValues">Sort by</label>
          <select
            onChange={(e) => setFilter(e.target.value)}
            name="sortingValues"
            id="sortingValues"
          >
            {sortingOptions.map((opt) => (
              <option key={sortingOptions.indexOf(opt)} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>{}</div>
      </div>
    </div>
  );
}

export default Shop;
