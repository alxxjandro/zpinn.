import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { token } from "../components/Albums";
import albumLinks from "../components/Albums";
import { useEffect, useState } from "react";

function Layout() {
  const [albums, setAlbums] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //in order to prevent it from changing back to home when reloading
  const location = useLocation();
  const [selected, setSelected] = useState(() => {
    const path = location.pathname.slice(1); //slincing the "/"
    return path || "home";
  });
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cached = localStorage.getItem("albums");

    if (cached) {
      setAlbums(JSON.parse(cached));
      setLoading(false);
      return;
    }

    const fetchAlbums = async () => {
      try {
        console.log(
          "No cache avaliable on localstorage, fetching from the api!",
        );
        const results = await Promise.all(albumLinks.map((a) => fetchAlbum(a)));
        setAlbums(results);
        console.log(results);
        localStorage.setItem("albums", JSON.stringify(results)); // Cache it!
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);
        console.error("An error ocurred while fetching albums ", e);
      }
    };

    fetchAlbums();
  }, []);

  async function fetchAlbum(a) {
    const res = await fetch(
      `https://api.discogs.com/database/search?q=${encodeURIComponent(
        a.album,
      )}&artist=${encodeURIComponent(a.artist)}&type=release&token=${token}`,
    );
    const data = await res.json();
    const obj = {
      id: data.results[0].id,
      imgsrc: data.results[0].cover_image,
      artist: data.results[0].title
        .split("-")[0]
        .substring(0, data.results[0].title.split("-")[0].length - 1), //remove the last space
      album: data.results[0].title.split("-")[1].slice(1), //remove the first space
      year: data.results[0].year,
      genre: data.results[0].genre[0],
      header: a.header, //boolean for being displayed on the landing page
      price: a.price,
      like: a.like,
    };
    return obj;
  }

  return (
    <div>
      <Navbar selected={selected} setSelected={setSelected} />
      <Outlet
        context={{
          setAlbums,
          albums,
          loading,
          selected,
          setSelected,
          error,
          cartItems,
          setCartItems,
        }}
      />
      <Footer />
    </div>
  );
}

export default Layout;
