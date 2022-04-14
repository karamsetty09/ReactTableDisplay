import React, { Fragment } from 'react'
import {createStore, compose, applyMiddleware, bindActionCreators, combineReducers} from "redux";

function Learnings() {
  // Handling states
  
  const initialState = { value: 0};
  // const incrementAction = { type: 'INCREMENT' };
  
  const INCREMENT = "counter/increment";
  const increment = () => ({type: INCREMENT});

  const ADD = 'ADD';
  const add = (amount) => ({type: ADD, payload: amount});

  // Reducer in react to handle states by using action
  const reducer = (state = initialState, action) => {
    if(action.type === INCREMENT){
      return { value: state.value + 1 };
    }
    if(action.type === ADD){
      return { value: state.value + action.payload};
    }
    return state;
  }
  
  // reducer logic assigned to store.
  const store = createStore(reducer);

  // dispatch raises and action to reducer to execute state changes.
  store.dispatch(increment());

  console.log(store);
  // getState gives the state value.
  console.log(store.getState());

  const subscriber = () => console.log('SUBSCRIBER', store.getState());
  // subscribe fucntion in store to bind and display.
  store.subscribe(subscriber);

  
  store.dispatch(increment());
  store.dispatch(add(100));

  // bindActionCreator in action.
  const actions = bindActionCreators({increment, add}, store.dispatch);
  actions.add(100);
  actions.increment();

  const [dispatchIncrement, dispatchAdd] = [increment, add].map((fn) => 
  // combines the functions or application of functions
  compose(store.dispatch, fn)
  );
  
  console.log(store.getState());

  return (
    <div>
      <h1>Learnings</h1>
    </div>
  )
}

export default Learnings;