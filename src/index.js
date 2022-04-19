import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { darkTheme } from "./themes/darktheme";
import { SnackbarProvider } from "notistack";
import { UIProvider } from "./context/ui/UIProvider";
import { ClientProvider } from "./context/client/ClientProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <ClientProvider>
        <UIProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </UIProvider>
      </ClientProvider>
    </SnackbarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
