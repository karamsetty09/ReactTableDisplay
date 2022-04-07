import { useState } from 'react';
import './todo.scss';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Finish Vue.js series',
      isComplete: true,
    },
    {
      id: 3,
      title: 'Finish Laravel series',
      isComplete: false,
    },
    {
      id: 4,
      title: 'Finish Vue App with Laravel by Axios',
      iscomplete: true,
    }
  ]);

  // constant to hold the user input.
  const [todoInput, setTodoInput] = useState('');
  // constant to create the user ID.
  const [idForTodo, setidforTodo] = useState(3);

  // function module to add user input to todos created by useState.
  function addTodo(event){
    event.preventDefault();

    // Handling empty input string
    if(todoInput.trim().length === 0){
      return;
    }

    // using setTodos for inserting into todos
    setTodos([
      ...todos,
      {
      id: idForTodo,
      title: todoInput,
      isComplete: false,
    },
    ]);

    // Emptying the user input to prevent ambiguity
    setTodoInput('');

    // Handling increment in ID
    setidforTodo(prevIdForTodo => prevIdForTodo + 1);
  }

  // function module to display data on screen of user input
  function handleInput(event){                  
    setTodoInput(event.target.value);
  }

  // function module to handle deleting of todos
  function deleteTodo(id){
    setTodos([...todos].filter(todo=> todo.id != id));
  }


  return (
    <div className="todo-app-container">
      <div className="todo-app">
      <h2>Todo App</h2>
      
        <form action="#" onSubmit={addTodo}>      {/* calling addTodo function to insert todos state. */}     
          <input
            type="text"
            value={todoInput}                     // assigning value to constant created on line 30
            onChange={handleInput}                // assigning onChange event to display user changes. 
            className="todo-input"
            placeholder="What do you need to do?"
          />
        </form>

        {/* Looping through todos for display */}

        <ul className="todo-list">

          {/* React Map to display the items by using index */}
          {todos.map((todo, index) => (                 

            <li key={todo.id} className="todo-item-container">
              <div className="todo-item">
                <input type="checkbox" />
                <span className="todo-item-label">{todo.title}</span>
                {/* <input type="text" className="todo-item-input" value="Finish React Series" /> */}
              </div>

              {/* Event action for delete button: using callback action(Direct calling function module is not correct as id is involved). */}
              <button onClick={() => deleteTodo(todo.id)} className="x-button">
                <svg
                  className="x-button-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>

<div className="check-all-container">
<div>
            <div className="button">Check All</div>
          </div>
          <span>3 items remaining</span>
        </div>
        <div className="other-buttons-container">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="button">Clear completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;