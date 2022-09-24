import { useState, createContext } from "react";

export const NotesContext = createContext();

export const NotesProvider = (props) => {
  const [notes, setNotes] = useState([
    {
      name: "Context API",
      deadline: "24th evening",
      id: 1,
    },
    {
      name: "jest testing",
      deadline: "24th night",
      id: 2,
    },
    {
      name: "css Mastering",
      deadline: "Daily one hour task",
      id: 3,
    },
  ]);

  return (
    <NotesContext.Provider value={[notes, setNotes]}>
      {props.children}
    </NotesContext.Provider>
  );
};
