import React from "react";

import ReactDOM from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

import { StyledEngineProvider } from "@mui/material/styles";

import "./index.css";

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <HydratedRouter />
    </StyledEngineProvider>
  </React.StrictMode>
);
