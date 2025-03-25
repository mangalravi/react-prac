// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul style={{display:"flex",gap:"1.5rem",listStyle:"none"}}>
            <li>
              <Link to="/page1">Page 1</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
