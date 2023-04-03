import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { CounterContextProvider } from "./context/CounterContext";
import Navbar from "../components/Navbar";
import { ColorContextProvider } from "./context/ColorContext";

function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <ColorContextProvider>
          <Navbar/>
          <Outlet />
        </ColorContextProvider>
      </CounterContextProvider>
    </div>
  );
}

export default App;
