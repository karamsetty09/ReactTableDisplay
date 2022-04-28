import React, { Fragment } from 'react';
import Hr from '../common/hr';
import { Header } from '../header/header';
import Card from './Card';
import './Learning.css'

import ExpenseItem from './ExpenseItem';
import {createStore, compose, applyMiddleware, bindActionCreators, combineReducers} from "redux";

function Learning() {
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

  const center = {
    textAlign: 'center',
  };

  const expenses = [
      {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
      },
      {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
      },
    ];
  return (
    <div>
      <hr/>
      <div style={center}>
      <Header text="Learnings" color="white"/>
      </div>
      <Hr/>
    <Card className='expenses'>
      <ExpenseItem title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date}/>
        <ExpenseItem title={expenses[1].title} 
        amount={expenses[1].amount} 
        date={expenses[1].date}/>
        <ExpenseItem title={expenses[2].title} 
        amount={expenses[2].amount} 
        date={expenses[2].date}/>
        <ExpenseItem title={expenses[3].title} 
        amount={expenses[3].amount} 
        date={expenses[3].date}/>
    </Card>
      
    </div>
  )
}

export default Learning;