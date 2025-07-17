import App from "@/App";
import AddToCard from "@/pages/addToCardPage";
import BirthdayCardsPage from "@/pages/BirthdayCardsPage";
import HomePage from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import PersonalisePage from "@/pages/PersonalisePage";
import PersonalisePage2 from "@/pages/PersonalisePage2";
import QrCodePage from "@/pages/QrcodePage";
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
        path: "/birthday-cards",
        element: <BirthdayCardsPage />,
      },
      {
        path: "/add",
        element: <AddToCard/>,
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

    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
