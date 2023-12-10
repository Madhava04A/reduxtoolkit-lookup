import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import creamReducer from "../features/icecream/iceCreamSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: creamReducer,
    user: userReducer,
  },
});

export default store;
