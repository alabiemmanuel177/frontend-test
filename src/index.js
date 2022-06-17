import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./views/App";
import { ContextProvider } from "./components/context/Context";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
