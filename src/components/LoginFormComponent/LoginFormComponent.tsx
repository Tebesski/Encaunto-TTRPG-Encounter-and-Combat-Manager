import React, { useState } from "react";
import AriaModal from "react-aria-modal";
import style from "./LoginFormComponent.module.scss";
import { useAuth } from "../../contexts/AuthContext";

type LoginFormComponentT = {
  deactivateModal:
    | ((
        event:
          | React.MouseEvent<Element, MouseEvent>
          | React.KeyboardEvent<Element>,
      ) => void)
    | undefined;

  modalActive: boolean;

  setLoginFormActive: Function;
  setRegistrationFormActive: Function;
};

export default function LoginFormComponent(props: LoginFormComponentT) {
  const {
    deactivateModal,
    modalActive,
    setLoginFormActive,
    setRegistrationFormActive,
  } = props;
  const auth = useAuth();

  const [email, setEmail] = useState<string>("jack@mail.com");
  const [password, setPassword] = useState<string>("qwerty");

  const [loginStatus, setLoginStatus] = useState({
    incorrectCreds: false,
    loggingIn: false,
    awaitingInput: true,
  });

  function getApplicationNode() {
    return document.getElementById("mainApp") as Element;
  }

  function handleLogin() {
    if (email && password) {
      auth?.login(email, password);
      setLoginFormActive(false);
    } else {
      setLoginStatus((status) => {
        return { ...status, incorrectCreds: true };
      });

      const timer = setTimeout(() => {
        clearTimeout(timer);
        setLoginStatus((status) => {
          return { ...status, incorrectCreds: false };
        });
      }, 2000);
    }
  }

  function handleStartRegistration() {
    setLoginFormActive(false);
    setRegistrationFormActive(true);
  }

  return modalActive ? (
    <AriaModal
      titleText="LOG IN"
      onExit={deactivateModal}
      getApplicationNode={getApplicationNode}
      underlayStyle={{ paddingTop: "2em" }}
    >
      <a className="formClose" onClick={deactivateModal}>
        <i className="fa-solid fa-xmark formCloseIcon"></i>
      </a>

      <header className={`${style.loginPageContainer}`}>
        <div className={`${style.loginInputs}`}>
          <input
            id="email"
            type="email"
            className={`${style.input} ${
              loginStatus.incorrectCreds ? style.incorrectCreds : ""
            }`}
          />

          <input
            id="password"
            type="password"
            className={`${style.input} ${
              loginStatus.incorrectCreds ? style.incorrectCreds : ""
            }`}
          />
        </div>

        <label htmlFor="rememberMe" className={`${style.rememberMe}`}>
          <input type="checkbox" id="rememberMe" />
          Remember me
        </label>

        <main className={`${style.loginMain}`}>
          <button
            onClick={() => handleLogin()}
            className={`formBtn ${style.signIn}`}
          >
            LOG IN
          </button>

          <button type="button" className={`${style.forgotPass} formBtn`}>
            Forgot password?
          </button>
        </main>

        <div className={`text-center`}>
          <p>
            <a
              onClick={handleStartRegistration}
              className={`${style.registerBtn}`}
            >
              {`<`} Register {`>`}
            </a>
          </p>
        </div>
      </header>
    </AriaModal>
  ) : (
    false
  );
}
