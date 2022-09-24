import React, { useState, useContext } from "react";
import { NotesContext } from "./NotesContext";

const AddNote = () => {
  const [note, setNote] = useState("");
  const [deadline, setDeadline] = useState("");
  const [notes, setNotes] = useContext(NotesContext);

  const updateName = (e) => {
    setNote(e.target.value);
  };

  const updatedeadline = (e) => {
    setDeadline(e.target.value);
  };

  const addNote = (e) => {
    e.preventDefault();
    setNotes((prevNotes) => [...prevNotes, { name: note, deadline: deadline }]);
  };

  return (
    <form onSubmit={addNote}>
      <input type="text" name="name" value={note} onChange={updateName} />
      <input
        type="text"
        name="price"
        value={deadline}
        onChange={updatedeadline}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddNote;
