import { useCallback, useMemo, useContext, useState } from 'react'
import { NotesContext } from '../../contexts/Note/context'
import { Search } from '../Search/Search';
import { TagsList } from '../TagsList/TagsList';
import { NotesList } from '../NotesList/NotesList';

export function Notes() {
	const { notes, setNotes } = useContext(NotesContext)

	const [searchQuery, setSearchQuery] = useState('')

	const filteredNotes = notes.filter(
		note =>
			note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			note.tags.includes(searchQuery)
	)

	const uniqueTags = useMemo(() => {
		return [...new Set(notes.reduce((acc, note) => acc.concat(note.tags), []))]
	}, [notes])

	const onTagClick = useCallback(
		tag => {
			setSearchQuery(tag)
		},
		[setSearchQuery]
	)

	return (
		<>
			<Search
				value={searchQuery}
				onChange={setSearchQuery}
			/>
			{!!uniqueTags.length && (
				<TagsList
					tags={uniqueTags}
					onTagClick={onTagClick}
				/>
			)}
			{!!filteredNotes.length && (
				<NotesList
					notes={filteredNotes}
					setNotes={setNotes}
				/>
			)}
		</>
	)
}
