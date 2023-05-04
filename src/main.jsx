import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./pages/routes/Routes";
import "tailwindcss/tailwind.css";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster></Toaster>
  </React.StrictMode>
);
