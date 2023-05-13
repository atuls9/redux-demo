const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  if (action.type === "INCREMENTBY2") {
    return {
      counter: state.counter + 2,
    };
  }

  if (action.type === "DECREMENTBY2") {
    return {
      counter: state.counter - 2,
    };
  }
};
const store = redux.createStore(counterReducer);

console.log(store.getState());
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });

// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "DECREMENT" });

store.dispatch({ type: "INCREMENTBY2" });
store.dispatch({ type: "INCREMENTBY2" });

store.dispatch({ type: "DECREMENTBY2" });
store.dispatch({ type: "DECREMENTBY2" });
