import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MainContainer } from "./containers/MainContainer/MainContainer";

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container as HTMLElement)

root.render(
   <React.StrictMode>
      <BrowserRouter>
         <MainContainer />
      </BrowserRouter>
   </React.StrictMode>
)