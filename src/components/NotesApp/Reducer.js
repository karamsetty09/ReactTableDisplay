import { useState, useReducer, useContext } from "react";

import AppContext from "../contextAPI/app-context";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "initCount":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  count: 0,
};

const Reducer = () => {
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const { message } = useContext(AppContext);
  return (
    <div>
      <h1>Reducer Example: {message}</h1>
      <div>
        <label>Start Count:</label>
        <input
          type="number"
          onChange={(e) => setInput(parseInt(e.target.value))}
          value={input}
        />
        <br />
        <button
          onClick={(e) => dispatch({ type: "initCount", payload: input })}
        >
          Initialize Counter
        </button>
      </div>

      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
};

export default Reducer;
