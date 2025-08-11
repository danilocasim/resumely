import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import NavigationBar from "./components/Navigation.jsx";

createRoot(document.querySelector("header")).render(
  <StrictMode>
    <NavigationBar />
  </StrictMode>
);

createRoot(document.querySelector("main")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
