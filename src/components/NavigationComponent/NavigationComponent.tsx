import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import style from "./NavigationComponent.module.scss";
import { useAuth } from "../../contexts/AuthContext";
import LoginFormComponent from "../LoginFormComponent/LoginFormComponent";
import RegistrationFormContainer from "../RegistrationFormComponent/RegistrationFormComponent";

export const NavigationComponent = () => {
  const [logOutButton, setLogOutButton] = useState(false);
  const [loginFormActive, setLoginFormActive] = useState(false);
  const [registrationFormActive, setRegistrationFormActive] = useState(false);

  const auth = useAuth();
  const navigate = useNavigate();

  function revealLogOut() {
    setLogOutButton(true);
  }

  function hideLogOut(e: React.MouseEvent) {
    if ((e.relatedTarget as HTMLElement).id !== "logOutButton") {
      setLogOutButton(false);
    }
  }

  function handleLogOut() {
    setLogOutButton(false);
    auth?.logOut();
    navigate("/");
  }

  function activateModal() {
    setLoginFormActive(true);
  }

  function deactivateLoginModal() {
    setLoginFormActive(false);
  }

  function deactivateRegistrationModal() {
    setRegistrationFormActive(false);
  }

  return (
    <>
      <div className={style.navBar}>
        <NavLink to="/battlefield">FIELD</NavLink>

        <NavLink
          to="/workshop"
          className={auth?.isAuthenticated ? `` : `${style.hidden}`}
        >
          WORKSHOP
        </NavLink>

        <a
          className={
            auth?.isAuthenticated ? `${style.hidden}` : `${style.loginButton}`
          }
          onClick={activateModal}
        >
          LOG IN
          <i className="fa-solid fa-user"></i>
        </a>

        <NavLink
          to="/profile"
          onMouseEnter={revealLogOut}
          onMouseLeave={(e) => hideLogOut(e)}
          style={{ zIndex: "2" }}
          className={auth?.isAuthenticated ? `` : `${style.hidden}`}
        >
          PROFILE
        </NavLink>

        <button
          className={`fa-solid fa-right-from-bracket ${style.logOutBtn}`}
          id="logOutButton"
          style={
            logOutButton
              ? { left: "0", position: "relative", zIndex: "1", opacity: "100" }
              : {
                  left: "-25px",
                  position: "relative",
                  zIndex: "-1",
                  opacity: "0",
                }
          }
          onMouseLeave={(e) => hideLogOut(e)}
          onClick={handleLogOut}
          hidden={auth?.isAuthenticated ? false : true}
        ></button>
      </div>

      <LoginFormComponent
        deactivateModal={deactivateLoginModal}
        setLoginFormActive={setLoginFormActive}
        setRegistrationFormActive={setRegistrationFormActive}
        modalActive={loginFormActive}
      />

      <RegistrationFormContainer
        deactivateModal={deactivateRegistrationModal}
        setLoginFormActive={setLoginFormActive}
        setRegistrationFormActive={setRegistrationFormActive}
        modalActive={registrationFormActive}
      />
    </>
  );
};
