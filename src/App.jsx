import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import NotePage from "./pages/NotePage";
import NotFound from "./pages/NotFound";
import Login from "./components/login/Login";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn === false) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }
  return (
    <Routes>
      <Route element={<Home />} path="/" exact />
      <Route element={<AboutUs />} path="/about-us" exact />
      <Route element={<Contact />} path="/contact" exact />
      <Route element={<NotePage />} path="/note/:id" exact />
      <Route element={<NotFound />} path="*" />
      <Route element={<Login />} path="/login" />
    </Routes>
  );
}
