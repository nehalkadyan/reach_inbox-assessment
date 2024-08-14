import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the user slice
const initialState = {
  currentUser: null,
  token: null,
};

// Create a user slice with reducers
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducer to update currentUser when sign-in is successful
    signInSuccessful: (state, action) => {
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
    },

    // Reducer to log out the current user
    logoutUser: (state) => {
      state.currentUser = null;
      state.token = null;
    },
  },
});

// Export action creators
export const { signInSuccessful, logoutUser } = userSlice.actions;

// Export reducer function
export default userSlice.reducer;
