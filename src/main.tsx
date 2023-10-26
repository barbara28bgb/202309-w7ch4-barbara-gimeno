import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/App/App";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/maintheme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
