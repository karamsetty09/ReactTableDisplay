import { useContext } from "react";
import Note from "./Note";
import { NotesContext } from "./NotesContext";

const NotesList = () => {
  const [notes, setNotes] = useContext(NotesContext);
  return (
    <div>
      {notes.map((note) => (
        <Note name={note.name} deadline={note.deadline} />
      ))}
    </div>
  );
};

export default NotesList;
