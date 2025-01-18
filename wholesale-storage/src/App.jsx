import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SecureWarehousing from "./components/SecureWareHousing";
import CompetitiveProgramming from "./components/CompetitiveProgramming";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secure-warehousing" element={<SecureWareHousing />} />
        <Route path="/competitive-programming" element={<CompetitiveProgramming />} />
      </Routes>
    </Router>
  );
}

export default App;
