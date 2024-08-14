import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeState: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.themeState === "dark") {
        state.themeState = "light";
      } else {
        state.themeState = "dark";
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
