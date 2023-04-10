import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  // reducer: counterSlice.reducer,  // reducerが一つの場合
  reducer: { counter: counterReducer, auth: authReducer }, // 複数のreducerを管理したい時
});

export default store;
