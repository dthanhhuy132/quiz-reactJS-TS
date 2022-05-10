import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { PageProvider } from "./Components/Provider/Provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PageProvider>
      <App />
    </PageProvider>
  </React.StrictMode>
);
