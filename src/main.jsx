import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyListProvider } from "./components/context/MyListProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyListProvider>
      <App />
    </MyListProvider>
  </StrictMode>
);
