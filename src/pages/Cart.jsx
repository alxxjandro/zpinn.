import { useEffect, useState } from "react";
import cartstyle from "../styles/cart.module.css";
import { useOutletContext } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

function Cart() {
  const { albums, cartItems, loading, error, setCartItems } = useOutletContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!albums || cartItems.length === 0) {
      setTotal(0);
      return;
    }

    const sum = cartItems.reduce((acc, id) => {
      const album = albums.find(a => a.id === id);
      return album ? acc + album.price : acc;
    }, 0);

    setTotal(sum);
  }, [albums, cartItems]);

  function handleDelete(id) {
    setCartItems(prev => prev.filter(item => item !== id));
  }

  function createCard(id) {
    if (!albums) return null;
    const album = albums.find((a) => a.id === id);
    if (!album) return null;

    return (
      <div key={id} className={cartstyle.card}>
        <img src={album.imgsrc} alt={album.album} className={cartstyle.img} />
        <div className={cartstyle.details}>
          <h3>{album.album}</h3>
          <p>{album.artist}</p>
          <p>{album.genre} • {album.year}</p>
          <p className={cartstyle.price}>${album.price}</p>
        </div>
        <button
          className={cartstyle.deleteBtn}
          onClick={() => handleDelete(id)}
          aria-label="Remove from cart"
        >
          <FaTrashAlt />
        </button>
      </div>
    );
  }

  return (
    <div className={cartstyle.MainContainer}>
      <h1 className={cartstyle.title}>
        Your records, <span className="strong">almost</span> zpinning.
      </h1>
      <div className={cartstyle.container}>
        <div className={cartstyle.records}>
          {loading && <h1>Loading...</h1>}
          {error && <h1>An error occurred! Try again in a few minutes...</h1>}
          {cartItems.length > 0 ? cartItems.map((id) => createCard(id)) : <h1 className={cartstyle.empty}>Your cart is empty :(</h1> }

        </div>

        <div className={cartstyle.total}>
          <h2>Order summary</h2>
          <div className={cartstyle.subtotal}>
            <h2>Subtotal...</h2>
            <h2><span className="strong">${total}</span></h2>
          </div>
          <div className={cartstyle.shipping}>
            <h2>Shipping...</h2>
            <h2><span className="strong">free</span></h2>
          </div>
          <hr />
          <div className={cartstyle.totalprice}>
            <h2>Total...</h2>
            <h2><span className="strong">${total}</span></h2>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;