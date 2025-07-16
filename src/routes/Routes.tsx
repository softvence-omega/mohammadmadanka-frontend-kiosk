import App from "@/App";
import AddToCard from "@/pages/addToCardPage";
import BirthdayCardsPage from "@/pages/BirthdayCardsPage";
import HomePage from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import PersonalisePage from "@/pages/PersonalisePage";
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

    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
