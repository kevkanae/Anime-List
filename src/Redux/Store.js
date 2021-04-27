import { configureStore } from "@reduxjs/toolkit";
import switchReducer from "./Switcher";

export default configureStore({
  reducer: {
    switcher: switchReducer,
  },
});
