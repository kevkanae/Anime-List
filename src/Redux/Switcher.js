import { createSlice } from "@reduxjs/toolkit";

export const switchSlice = createSlice({
  name: "switcher",
  initialState: {
    value: false,
  },
  reducers: {
    switchOn: (state) => {
      state.value = true;
    },
    switchOff: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { switchOn, switchOff } = switchSlice.actions;

export default switchSlice.reducer;
