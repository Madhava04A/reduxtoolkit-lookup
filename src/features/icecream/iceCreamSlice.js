import { createSlice } from "@reduxjs/toolkit";
import { ordered } from "../cake/cakeSlice";

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: {
    numOfIceCreams: 20,
  },
  reducers: {
    creamOrdered: (state) => {
      state.numOfIceCreams--;
    },
    creamRestocked: (state, action) => {
      state.numOfIceCreams += action.payload ? action.payload : 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ordered, (state, action) => {
      state.numOfIceCreams--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { creamOrdered, creamRestocked } = iceCreamSlice.actions;
