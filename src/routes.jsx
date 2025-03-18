import { createBrowserRouter } from "react-router-dom";

import Landing from "./pages/Landing";
import News from "./pages/News";
import Federation from "./pages/Federation";
import Wip from "./pages/Wip";
import Layout from "./layout/Layout";
import Training from "./components/NewsPage/Training";
import PlayingStyles from "./components/NewsPage/PlayingStyles";
import OurProgram from "./components/OurProgramPage/OurProgram";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/news/training",
        element: <Training />,
      },
      {
        path: "/news/play-styles",
        element: <PlayingStyles />,
      },
      {
        path: "/federation",
        element: <Federation />,
      },
      {
        path: "/wip",
        element: <Wip />,
      },
      {
        path:"/program",
        element:<OurProgram/>
      }
      
    ],
  },
]);
export default routes;
