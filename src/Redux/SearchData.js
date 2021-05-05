import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "searchData",
  initialState: {
    value: null,
  },
  reducers: {
    setTextData: (state, actions) => {
      state.value = actions.payload.animeMangaSearch;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTextData } = searchSlice.actions;

export default searchSlice.reducer;
