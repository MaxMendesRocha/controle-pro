import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import {
  CompetencyProvider
} from "./context/CompetencyContext";

ReactDOM.createRoot(
  document.getElementById(
    "root"
  )
).render(

  <React.StrictMode>

    <CompetencyProvider>

      <App />

    </CompetencyProvider>

  </React.StrictMode>
);