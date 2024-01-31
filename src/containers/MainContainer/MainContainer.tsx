import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "../../components/Helpers/ProtectedRoute";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { NavigationComponent } from "../../components/NavigationComponent/NavigationComponent";
import { FieldPage } from "../../pages/FieldPage/FieldPage";
import { WorkshopPage } from "../../pages/WorkshopPage/WorkshopPage";
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import { FooterComponent } from "../../components/FooterComponent/FooterComponent";

import style from "./MainContainer.module.scss";

export const MainContainer = () => {
  return (
    <div className={style.container} id="mainApp">
      <header className={style.navigationComponent}>
        <NavigationComponent />
      </header>

      <main>
        <Routes>
          <Route index={true} element={<FieldPage />} />
          <Route path="/battlefield" element={<FieldPage />} />
          <Route
            path="/workshop"
            element={
              <ProtectedRoute>
                <WorkshopPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
};
