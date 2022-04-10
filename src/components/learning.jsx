import React from 'react'
import {createStore, compose, applyMiddleware, bindActionCreators} from "redux";

export default function Learnings() {
    // Handling states
  
  const initialState = { value: 0};

  const reducer = (state, action) => {
    return state;
  }

  const store = createStore(reducer);

  console.log(store);
  return (
    <div>Learnings</div>
  )
}
