import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../index.css";
import { Home } from "./Home";
import { Aboutus } from "./Aboutus";
import { Foundation } from "./Foundation";
import { Project } from "./Project";
import { Admin } from "./Admin";
import { Applicants } from "./Applicants";
import { Signup } from "../views/Signup";
import { AppForm } from "./AppForm";
import { Login } from "./Login";
import { Context } from "../components/context/Context";

export const App = () => {
  const {user} = useContext(Context)
  return (
    <BrowserRouter>
      <Routes>
        <Route element={user ? <Admin /> : <Home />} path="admin" />
        <Route index element={<Home />} path="/" />
        <Route element={<Aboutus />} path="aboutus" />
        <Route element={<Foundation />} path="thefoundation" />
        <Route element={<Project />} path="project" />
        <Route element={<Login />} path="login" />
        <Route element={<Applicants />} path="applicants" />
        <Route element={user ? <Signup /> : <Home />} path="signup" />
        <Route element={<AppForm />} path="apply" />
      </Routes>
    </BrowserRouter>
  );
};
