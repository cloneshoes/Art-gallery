import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FilterProvider } from "./context/FilterContext";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
  <Navbar />
  <FilterProvider>
    <App />
  </FilterProvider>
</BrowserRouter>
  </React.StrictMode>
);