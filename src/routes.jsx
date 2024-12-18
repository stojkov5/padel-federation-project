import { createBrowserRouter } from "react-router-dom";

import Landing from "./pages/Landing";
import News from "./pages/News";
import Federation from "./pages/Federation";
import Wip from "./pages/Wip";
import Layout from "./layout/Layout";
import Training from "./components/NewsPage/Training";

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
        path: "/federation",
        element: <Federation />,
      },
      {
        path: "/wip",
        element: <Wip />,
      },
      {
        path: "/training",
        element: <Training />,
      },
    ],
  },
]);
export default routes;
