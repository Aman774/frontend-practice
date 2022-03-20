import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

// Views

import Home from "./views/Home";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/home" element={<Home name="aman" />} />
      </Routes>
      <div>FOOTER</div>
    </Router>
  );
}

export default App;
