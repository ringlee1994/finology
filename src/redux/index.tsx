import { combineReducers } from "@reduxjs/toolkit";
import getUser from "./getUserSlice";

const rootReducer = combineReducers({
  getUser,
});

export default rootReducer;
