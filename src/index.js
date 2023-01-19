import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Styles/GlobalStyle";
import variables from "./Styles/variables";
import theme from "./Styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={{ style: theme, variables }}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);
