import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import React from "react";
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