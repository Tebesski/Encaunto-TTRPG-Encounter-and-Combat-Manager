import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MainContainer } from "./containers/MainContainer/MainContainer";
import { AuthProvider } from "./contexts/AuthContext";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MainContainer />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
