import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "bootstrap/dist/css/bootstrap.css";
import { ThemeContext } from "./components/Header/Header";
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex/Pokedex";
import Cart from "./components/Cart/Cart"
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Header>
      <Navbar />
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Pokedex />}></Route>
        <Route path="/cart" element={<Cart />} ></Route>
      </Routes>

    </Header>
  );
}

export default App;
