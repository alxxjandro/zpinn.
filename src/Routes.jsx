import LandingPage from "./LandinPage";
import Shop from "./Shop";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <LandingPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/shop",
    element: <Shop/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/shop/cart",
    element: <Cart/>
  },
];

export default routes;