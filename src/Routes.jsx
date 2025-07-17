import LandingPage from "./pages/LandinPage";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "shop", element: <Shop /> },
      { path: "shop/cart", element: <Cart /> },
    ],
  },
];

export default routes;
