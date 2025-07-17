import LandingPage from "./pages/LandinPage";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop/cart",
    element: <Cart />,
  },
];

export default routes;
