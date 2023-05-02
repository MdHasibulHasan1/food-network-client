import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/header",
        element: <Header></Header>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
