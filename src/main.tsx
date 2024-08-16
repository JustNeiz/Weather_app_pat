import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense>
      <MantineProvider>
        <App />
      </MantineProvider>
    </Suspense>
  </React.StrictMode>,
);
