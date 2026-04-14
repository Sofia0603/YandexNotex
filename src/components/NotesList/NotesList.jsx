import styles from "./NotesList.module.css";
import { Note } from "../Note/Note";

export const NotesList = ({ notes }) => {
  return (
    <div className={styles.notesList}>
      {notes &&
        notes.map((note) => (
          <Note
            key={note.id}
            title={note.title}
            content={note.content}
            tags={note.tags}
            id={note.id}
            // onDelete={() => {
            // 	setNotes(notes.filter(currentNote => currentNote.id !== note.id))
            // }}
          />
        ))}
    </div>
  );
};
