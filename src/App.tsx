import { Component, lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";
const HomeScreen = lazy(() => import("./screens/Home"));
const LoginScreen = lazy(() => import("./screens/Login"));
const RegisterScreen = lazy(() => import("./screens/Register"));
import AppRoutes from "./router";
const App: Component = () => {
  //console.log("Initial load");
  return (
    <>
      <div id="popups" />
      <AppRoutes />
    </>
  );
};

export default App;
