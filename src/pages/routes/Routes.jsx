import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Header from "../Header/Header";
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
    ],
  },
]);

export default router;
