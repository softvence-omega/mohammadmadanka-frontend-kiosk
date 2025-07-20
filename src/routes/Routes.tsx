import App from "@/App";
import AddToCart from "@/pages/addToCartPage";
import CardsPage from "@/pages/CardsPage";
import HomePage from "@/pages/Home";
import MessageCustomizerPage from "@/pages/MessageCustomizerPage";
import NotFound from "@/pages/NotFound";
import OccasionPage from "@/pages/OccasionPage";
import PersonalisePage from "@/pages/PersonalisePage";
import PersonalisePage2 from "@/pages/PersonalisePage2";
import PersonalisePage3 from "@/pages/PersonalisePage3";
import PersonalisePage4 from "@/pages/PersonalisePage4";
import PersonalisePage5 from "@/pages/PersonalisePage5";
import QrCodePage from "@/pages/QrcodePage";
import ShoppingCartPage from "@/pages/ShoppingCartPage";
import { createBrowserRouter } from "react-router-dom";




const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/occasion",
        element: <OccasionPage/>,
      },
      {
        path: "/cards",
        element: <CardsPage/>,
      },

      {
        path: "/add",
        element: <AddToCart/>,
      },
      {
        path: "/personalize",
        element: <PersonalisePage/>,
      },
      {
        path: "/personalize2",
        element: <PersonalisePage2/>,
      },
      {
        path: "/qrcode",
        element: <QrCodePage/>,
      },
      {
        path: "/personalize3",
        element: <PersonalisePage3/>,
      },
      {
        path: "/personalize4",
        element: <PersonalisePage4/>,
      },
      {
        path: "/personalize5",
        element: <PersonalisePage5/>,
      },
      {
        path: "/shopping",
        element: <ShoppingCartPage/>,
      },
            {
        path: "/msg",
        element: <MessageCustomizerPage/>,
      },

    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
