import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "Ivan Bliminse",
      email: "bliminse@gmail.com",
    },
    pending: null,
    error: false,
  },
  // 1) simple reducer update if you need to update something manualy without any async or API
  //   reducers: {
  //     update: (state, action) => {
  //       state.userInfo = action.payload;
  //     },
  //   },

  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    updateError: (state) => {
      state.pending = null;
      state.error = true;
    },
  },
});

export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
