// src/components/ThemeSwitcher.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/action/themeActions";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleThemeChange = (theme) => {
    dispatch(setTheme(theme));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={() => handleThemeChange("light")}>Light Theme</button>
      <button onClick={() => handleThemeChange("dark")}>Dark Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
