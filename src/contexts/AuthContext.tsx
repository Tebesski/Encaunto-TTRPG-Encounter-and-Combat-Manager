import { AnyAction } from "@reduxjs/toolkit";
import React, { Reducer, useContext, useReducer, useState } from "react";
import { createContext } from "react";

export type AuthProviderProps = {
  children: React.ReactElement;
};

export type AuthContextValue = {
  user: null | string;
  isAuthenticated: boolean;
  login: Function;
  logOut: Function;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };

    case "logout":
      return { ...state, user: null, isAuthenticated: false };

    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@mail.com",
  password: "qwerty",
  avatar:
    "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/30/308e31f585f9424c949f355c9f25db5333f35c52_full.jpg",
};

function AuthProvider(props: AuthProviderProps) {
  //@ts-ignore
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  function login(email: string, password: string) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  function logOut() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext was used outside the AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
