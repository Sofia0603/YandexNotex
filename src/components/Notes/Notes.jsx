import { useCallback, useMemo, useState } from "react";
import { Search } from "../Search/Search";
import { TagsList } from "../TagsList/TagsList";
import { NotesList } from "../NotesList/NotesList";
import { useStore } from "../../store";

export function Notes() {
  const [searchQuery, setSearchQuery] = useState("");
  const notes = useStore((store) => store.notes);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tags.includes(searchQuery),
  );

  const uniqueTags = useMemo(() => {
    return [...new Set(notes.reduce((acc, note) => acc.concat(note.tags), []))];
  }, [notes]);

  const onTagClick = useCallback(
    (tag) => {
      setSearchQuery(tag);
    },
    [setSearchQuery],
  );

  return (
    <>
      <Search value={searchQuery} onChange={setSearchQuery} />
      {!!uniqueTags.length && (
        <TagsList tags={uniqueTags} onTagClick={onTagClick} />
      )}
      {!!filteredNotes.length && <NotesList notes={filteredNotes} />}
    </>
  );
}
