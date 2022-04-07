import React from "react";

type CounterState = {
  value: number;
};

const initialState: CounterState = { value: 0 };

type CounterAction = {
  type: "INCREMENT" | "DECREMEMT" | "RESET";
  payload?: number;
};

function reducer(state: CounterState, action: CounterAction) {
  if (action.type === "INCREMENT") {
    return { value: state.value + 1 };
  }

  if (action.type === "DECREMEMT") {
    return { value: state.value - 1 };
  }

  if (action.type === "RESET") {
    // since payload is optional it is possible for action.payload === undefined
    // as such we need to provide a default value since value: number
    return { value: action.payload || 0 };
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
