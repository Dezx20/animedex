import React from "react";

import { Routes } from "react-router-dom";
import { Route } from "react-router";

import HomePage from "./pages/HomePages";
import Anime from "./pages/Anime";
import Header from "./components/Header/Header";
import "./App.css";
function App() {
  return (
    <React.Fragment>
      {/* <h1>Testing</h1> */}
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/anime/:id" element={<Anime />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
