// const configureStore = require("@reduxjs/toolkit").configureStore;
// const cakeReducer = require("../features/cake/cakeSlice");
// const iceCreamReducer = require("../features/icecream/iceCreamSlice");
// const userReducer = require("../features/users/userSlice");

import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/iceCreamSlice";
import userReducer from "../features/users/userSlice";
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cakE: cakeReducer,
    iceCreaM: iceCreamReducer,
    useR: userReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// module.exports = store
export default store;
