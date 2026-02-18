import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
import "./assets/main.css";

import "./assets/custom.css";

import { HelmetProvider } from "react-helmet-async";
import { PopupProvider } from "./Components/PopupContext.jsx";
import WelcomePopup from "./Components/WelcomePopup.jsx";

createRoot(document.getElementById("root")).render(
  
  <StrictMode>
      <PopupProvider>
      <WelcomePopup />
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </PopupProvider>
  </StrictMode>
);
