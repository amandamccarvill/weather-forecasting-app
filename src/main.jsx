import React from "react";
import ReactDOM from "react-dom/client"; // <-- notice this line
import App from "./App";
import "./index.css";

// Create root and render
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);