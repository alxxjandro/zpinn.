import landing from "../styles/landing.module.css";
import shopstyle from "../styles/shop.module.css";
import { FaRegHeart,FaHeart } from "react-icons/fa6";


function LandingVinyl({
  imgsrc,
  artist,
  album,
  year,
  genre,
  header,
  shop = false,
  price,
  handleLike,
  like
}) {

  return (
    <div className={landing.card}>
      <img className={landing.img} src={imgsrc} alt={album + " album cover"} />
      <h1>{album}</h1>
      <h2>
        {artist} • {year} • {genre}
      </h2>
      {shop &&(
        <div className={shopstyle.price}>
          <h1>${price ? price : "99"}</h1>
          <div>
            <button onClick={handleLike}> {like ? <FaHeart /> : <FaRegHeart/>} </button>
            <button>Add to cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingVinyl;
