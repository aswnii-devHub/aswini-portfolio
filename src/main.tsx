import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./App";
// @ts-expect-error CSS module declarations are provided by the bundler at build time.
import "./styles.css";
// @ts-expect-error CSS module declarations are provided by the bundler at build time.
import "./site-refresh.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
);
