// const createSlice = require("@reduxjs/toolkit").createSlice;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCakes: 10,
};

const { reducer, actions } = createSlice({
  name: "caKe",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numberOfCakes--;
    },
    restocked: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

// module.exports = reducer;
export default reducer;

// module.exports.cakeActions = actions;
export const { ordered, restocked } = actions;
