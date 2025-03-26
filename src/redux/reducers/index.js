// src/redux/reducers/index.js

import { combineReducers } from "redux";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
