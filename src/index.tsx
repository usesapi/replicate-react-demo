import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { init } from "sapi-js-sdk";

init({ sapiId: "api-replicate-com-e9s4zk", requireAuth: true });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
