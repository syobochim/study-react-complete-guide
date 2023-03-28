import { createStore } from "redux";
import counter from "../components/Counter";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    state.counter + 1;
  }

  if (action.type === "decrement") {
    state.counter - 1;
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
