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
import PersonalisePage6 from "@/pages/PersonalisePage6";
import PreviewPage from "@/pages/PreviewPage";
import QrCodePage from "@/pages/QrcodePage";
import ShoppingCartPage from "@/pages/ShoppingCartPage";
import TemplateInfo from "@/pages/templateUploder";
import TestPage from "@/pages/test";
// import TemplateInfo from "@/pages/templateUploder";
// import TestPage from "@/pages/test";
import UploadPhoto from "@/pages/UploadPhoto";
import { createBrowserRouter } from "react-router-dom";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "occasion/:categoryId", element: <OccasionPage /> },
      { path: "cards/:occasionId", element: <CardsPage /> },
      { path: "add/:cardId", element: <AddToCart /> },
      {
        path: "personalize/:cardId",
        children: [
          { path: "step1", element: <PersonalisePage /> },
          { path: "step2", element: <PersonalisePage2 /> },
          { path: "photo", element: <QrCodePage /> },
          { path: "step3", element: <PersonalisePage3 /> },
          { path: "step4", element: <PersonalisePage4 /> },
          { path: "text", element: <PersonalisePage5 /> },
          { path: "step6", element: <PersonalisePage6 /> },
        ],
      },
      { path: "shopping", element: <ShoppingCartPage /> },
      { path: "msg/:cardId", element: <MessageCustomizerPage /> },
      { path: "preview/:cardId", element: <PreviewPage /> },
      { path: "/upload-template", element: <TemplateInfo/> },

      {path: "test", element: <TestPage />},
    ],
  },
  { path: "/upload-photo", element: <UploadPhoto/> },
  // { path: "/upload-template", element: <TemplateInfo/> },
  { path: "*", element: <NotFound /> },

]);


export default routes;
