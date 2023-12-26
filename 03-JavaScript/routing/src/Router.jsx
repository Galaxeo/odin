import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Keybodo from "./Keybodo";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "profile/:name",
      element: <Profile />,
    },
    {
      path: "keybodo",
      element: <Keybodo />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
