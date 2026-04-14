import { useParams } from "react-router";
import { Note } from "../../components/Note/Note";
import { useStore } from "./../../store/index";

export const NotePage = () => {
  const params = useParams("noteId");
  const notes = useStore((store) => store.notes);

  const note = notes.find((note) => note.id === params.noteId);

  return (
    <div>
      <Note {...note} />
    </div>
  );
};
