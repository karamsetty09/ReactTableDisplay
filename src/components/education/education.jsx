import { useState, useEffect } from "react";
import Hr from "../common/hr";
import { Header } from "../header/header";
import Circle from "./Circle";
import SubjectsTable from "./SubjectsTable";
import { getMasters } from "../services/MastersCourse";
import "./education.scss";
import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from "redux";

function Education() {
  const initialState = {
    users: [
      { id: 1, name: "steve" },
      { id: 2, name: "Eric" },
    ],
    tasks: [
      { title: "file the TPS reports" },
      { title: "order more energy drinks" },
    ],
  };

  const ADD_USER = "ADD_USER";
  const ADD_TASK = "ADD_TASK";

  const addTask = (title) => ({ type: ADD_TASK, payload: title });
  const addUser = (name) => ({ type: ADD_USER, payload: name });

  const userReducer = (users = initialState.users, action) => {
    if (action.type === ADD_USER) {
      return [...users, action.payload];
    }

    return users;
  };

  const taskReducer = (tasks = initialState.tasks, action) => {
    if (action.type === ADD_USER) {
      return [...tasks, action.payload];
    }

    return tasks;
  };

  // combineReducers to handle distributed reducers in store.
  const reducer = combineReducers({ users: userReducer, tasks: taskReducer });

  const store = createStore(reducer, initialState);

  // bindActionCreator in action.
  // const actions1 = bindActionCreators({addTask, addUser}, store1.dispatch);
  const title = { title: "hello" };
  store.dispatch(addTask(title));
  console.log(store.getState());
  const center = {
    textAlign: "center",
    display: "inline",
  };

  var colors = [
    { id: "#1C89BF", course: "Primary" },
    { id: "#E94F37", course: "Bachelors" },
    { id: "#393E41", course: "Masters" },
    { id: "#A1D363", course: "Professional" },
  ];

  const circles = colors.map((color, index) => (
    <li>
      <Circle key={index} course={color.course} bgColor={color.id} />
    </li>
  ));

  // To Make the thinks in oneline and make center.
  const inline = {
    display: "inline-block",
  };

  const [table, setTable] = useState([]);

  useEffect(() => {
    setTable(getMasters());
  }, [table]);

  return (
    <div style={center}>
      <hr />
      <Header text="EDUCATION" color="white" />
      <Hr />
      <div className="inline">{circles}</div>
      <Hr />
      <SubjectsTable table={table} />
    </div>
  );
}
export default Education;
