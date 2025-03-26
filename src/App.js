// // src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ThemeSwitcher from "./component/ThemeSwitcher";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Slider from "./pages/Slider";

const App = () => {
  const theme = useSelector((state) => state.theme.theme);

  const appStyle = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div style={appStyle}>
      <h1>React Redux Theme Switcher</h1>
      <ThemeSwitcher />
      <Router>
        <div>
          <nav>
            <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none" }}>
              <li>
                <Link to="/page1">Page 1</Link>
              </li>
              <li>
                <Link to="/page2">Page 2</Link>
              </li>
              <li>
                <Link to="/slider">slider</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/slider" element={<Slider />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
