import React from "react";
import AriaModal from "react-aria-modal";
import style from "./RegistrationFormComponent.module.scss";

type RegistrationFormComponentT = {
  deactivateModal:
    | ((
        event:
          | React.MouseEvent<Element, MouseEvent>
          | React.KeyboardEvent<Element>,
      ) => void)
    | undefined;

  modalActive: boolean;

  setRegistrationFormActive: Function;
  setLoginFormActive: Function;
};

export default function RegistrationFormContainer(
  props: RegistrationFormComponentT,
) {
  const {
    modalActive,
    deactivateModal,
    setRegistrationFormActive,
    setLoginFormActive,
  } = props;

  function getApplicationNode() {
    return document.getElementById("mainApp") as Element;
  }

  function handleRegistration() {
    setRegistrationFormActive(false);
  }

  function handleBackToLogin() {
    setRegistrationFormActive(false);
    setLoginFormActive(true);
  }

  return modalActive ? (
    <AriaModal
      titleText="REGISTRATION"
      onExit={deactivateModal}
      getApplicationNode={getApplicationNode}
      underlayStyle={{ paddingTop: "2em" }}
    >
      <a className="formClose" onClick={deactivateModal}>
        <i className="fa-solid fa-xmark formCloseIcon"></i>
      </a>
      <div className={`${style.registrationPageContainer}`}>
        <div className={`${style.registrationInputs}`}>
          <input
            placeholder="Username"
            id="text"
            type="text"
            className={`${style.input}`}
          />

          <input
            placeholder="E-Mail"
            id="email"
            type="email"
            className={`${style.input}`}
          />

          <input
            placeholder="Password"
            id="password"
            type="password"
            className={`${style.input}`}
          />

          <input
            placeholder="Repeat password"
            id="repeatPassword"
            type="text"
            className={`${style.input}`}
          />
        </div>
        <button
          className={`formBtn ${style.registrationBtn}`}
          onClick={handleRegistration}
        >
          REGISTER
        </button>

        <button
          className={`formBtn ${style.registrationBtn}`}
          onClick={handleBackToLogin}
        >
          {`<`} BACK TO LOG IN
        </button>
      </div>
    </AriaModal>
  ) : (
    false
  );
}
