import { Navigate, createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import LoginLayouts from "../layouts/LoginLayouts";
import Login from "../Login/Login";
import RecipeDetail from "../RecipeDetail/RecipeDetail";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayouts></LoginLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "blogs",
        element: <Blog></Blog>,
      },
      {
        path: "recipe/:Id",
        element: (
          <PrivateRoute>
            <RecipeDetail></RecipeDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch("https://server-hasib7143-gmailcom.vercel.app/chefs"),
      },
    ],
  },
]);

export default router;
