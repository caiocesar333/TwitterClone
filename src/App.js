import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import AppBase from "./AppBase"

// import { Container } from "postcss";


function App() {


  return (
    <Router>
      <Routes>
            <Route exact path="/" element={<AppBase/>}/>
            <Route exact path="/login" element={<Login/>}/>
        </Routes>
    </Router>
  );
}

export default App;
