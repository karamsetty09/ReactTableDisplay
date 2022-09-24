import { useContext } from "react";
import { NotesContext } from "./NotesContext";

const Nav = () => {
  const [notes, setNotes] = useContext(NotesContext);
  return (
    <div>
      <h3>Dev Ed</h3>
      <p>List of Notes: {notes.length}</p>
    </div>
  );
};

export default Nav;
