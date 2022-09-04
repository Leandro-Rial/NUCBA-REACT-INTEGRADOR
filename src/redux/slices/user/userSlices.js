import { createSlice } from "@reduxjs/toolkit";

// Slices
const userSlices = createSlice({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    'SET_USER': (state, action) => {
      return { ...state, user: action.payload };
    }
  }
});

export const { SET_USER } = userSlices.actions;

export default userSlices.reducer;