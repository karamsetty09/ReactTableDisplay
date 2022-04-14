import React ,{ Fragment } from 'react';
import {createStore, compose, applyMiddleware, bindActionCreators, combineReducers} from "redux";

function Education() {

  const initialState = {
    users: [
      { id: 1, name: "steve" },
      { id: 2, name: "Eric" }
    ],
    tasks: [
      { title: "file the TPS reports" },
      { title: "order more energy drinks" }
    ]
  }

  const ADD_USER = "ADD_USER";
  const ADD_TASK = "ADD_TASK";

  const addTask = (title) => ({type: ADD_TASK, payload: title });
  const addUser = (name) => ({type: ADD_USER,payload: name});

  const userReducer = (users = initialState.users, action) => {
    if(action.type === ADD_USER){
      return [...users, action.payload];
    }

    return users;
  }

  const taskReducer = (tasks = initialState.tasks, action) => {
    if(action.type === ADD_USER){
      return [...tasks, action.payload];
    }

    return tasks;
  }

  // combineReducers to handle distributed reducers in store.
  const reducer = combineReducers({users: userReducer, tasks: taskReducer});

  const store = createStore(reducer, initialState);

  // bindActionCreator in action.
  // const actions1 = bindActionCreators({addTask, addUser}, store1.dispatch);
  const title = { title: 'hello' };
  store.dispatch(addTask(title));
  console.log(store.getState());
  
  return (
    <div>
      <h1>Education</h1>
    </div>
  )
}
export default Education;
