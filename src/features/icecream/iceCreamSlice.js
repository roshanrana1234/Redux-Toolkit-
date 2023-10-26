// const createSlice = require("@reduxjs/toolkit").createSlice;
// const { cakeActions } = require("../cake/cakeSlice");
import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeAction } from "../cake/cakeSlice";

const initialState = {
  numberOfIceCreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecreaM",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numberOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numberOfIceCreams += action.payload;
    },
  },
  //   extraReducers: {
  //     ["caKe/ordered"]: (state, action) => {
  //       state.numberOfIceCreams--;
  //     },
  //   },

  extraReducers: (builder) => {
    builder.addCase(cakeAction, (state, action) => {
      state.numberOfIceCreams--;
    });
  },
});

// module.exports = icecreamSlice.reducer;
export default icecreamSlice.reducer;

// module.exports.iceCreamActions = icecreamSlice.actions;
export const { ordered, restocked } = icecreamSlice.actions;
