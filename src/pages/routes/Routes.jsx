import { Navigate, createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import LoginLayouts from "../layouts/LoginLayouts";
import Login from "../Login/Login";
import Register from "../Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayouts></LoginLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
