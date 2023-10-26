// const createSlice = require("@reduxjs/toolkit").createSlice;
// const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
// const axios = require("axios");
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// pending, fullfiled, rejected
export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

// module.exports = userSlice.reducer;

export default userSlice.reducer;

// module.exports.fetchUsers = fetchUsers;
