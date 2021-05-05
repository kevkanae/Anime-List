import { configureStore } from "@reduxjs/toolkit";
import switchReducer from "./Switcher";
import searchReducer from "./SearchData";

export default configureStore({
  reducer: {
    switcher: switchReducer,
    searchData: searchReducer,
  },
});
