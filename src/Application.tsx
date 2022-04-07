import React from "react";

type CounterState = {
  value: number;
};

const initialState: CounterState = { value: 0 };

type BasicCounterAction = {
  type: "INCREMENT" | "DECREMEMT";
};

type SetCounterAction = {
  type: "RESET";
  payload: number;
};

type CounterAction = BasicCounterAction | SetCounterAction;

function reducer(state: CounterState, action: CounterAction) {
  if (action.type === "INCREMENT") {
    return { value: state.value + 1 };
  }

  if (action.type === "DECREMEMT") {
    return { value: state.value - 1 };
  }

  if (action.type === "RESET") {
    return { value: action.payload };
  }

  return { ...state };
}

const Counter = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const reset = () => dispatch({ type: "RESET", payload: 5 });

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{state.value}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => dispatch({ type: "DECREMEMT" })}>
          Decrement
        </button>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
