import { Link } from "react-router-dom"
import React from "react"

import "./NavigationComponent.scss"

export const NavigationComponent = () => {

      return (
         <div className='menuButton'>
            <Link to="/">
               <button>FIELD</button>
            </Link>

            <Link to="/workshop">
               <button>WORKSHOP</button>
            </Link>

            <Link to="/profile">
               <button>PROFILE</button>
            </Link>
         </div>
      )
   }