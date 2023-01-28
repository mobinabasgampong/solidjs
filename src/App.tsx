import { Component, lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";
const HomeScreen = lazy(() => import("./screens/Home"));
const LoginScreen = lazy(() => import("./screens/Login"));
const RegisterScreen = lazy(() => import("./screens/Register"));

const App: Component = () => {
  //console.log("Initial load");
  return (
    <>
      <div id="popups" />
      <Routes>
        <Route path={"/"} component={HomeScreen} />
        <Route path={"/login"} component={LoginScreen} />
        <Route path={"/register"} component={RegisterScreen} />
      </Routes>
    </>
  );
};

export default App;
