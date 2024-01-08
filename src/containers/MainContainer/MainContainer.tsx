import React from 'react'
import { Route, Routes, Link } from "react-router-dom";

import {FieldPage} from '../../pages/FieldPage/FieldPage';
import {WorkshopPage} from '../../pages/WorkshopPage/WorkshopPage';
import {NavigationComponent} from '../../components/NavigationComponent/NavigationComponent';

import "./MainContainer.scss"

export const MainContainer = () => {
   return (
      <div className='container'>

         <header className='navigationComponent'>
            <NavigationComponent />
         </header>

         <main>
            <Routes>
               <Route index={true} element={<FieldPage />} />
               <Route path="/workshop" element={<WorkshopPage />} />
            </Routes>
         </main>

         <footer>
            
         </footer>

      </div>
   )
}