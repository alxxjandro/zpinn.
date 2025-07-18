import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { token } from "../components/Albums";
import albumLinks from "../components/Albums";
import { useEffect, useState } from "react";

function Layout() {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    if (albums !== null) return;
    const fetchAlbums = async () => {
      try {
        const results = await Promise.all(albumLinks.map((a) => fetchAlbum(a)));
        setAlbums(results);
      } catch (e) {
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
    return data.results[0];
  }

  return (
    <div>
      <Navbar />
      <Outlet context={{ albums }} />
      <Footer />
    </div>
  );
}

export default Layout;
