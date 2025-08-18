import React , {useReducer} from 'react'
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

function Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <h1>Count : {state.count}</h1>
    <button onClick={() => dispatch({ type: "increment" })}>increment</button>
    <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    
    </>
  )
}

export default Reducer