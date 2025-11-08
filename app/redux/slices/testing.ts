import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testValue: 0,
};

const testingSlice = createSlice({
  name: "testing",
  initialState,
  reducers: {
    setTestValue: (state, action) => {
      state.testValue = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setTestValue } = testingSlice.actions;

export default testingSlice.reducer;
