import { useParams } from 'react-router'
import { useContext } from 'react'
import { NotesContext } from '../../../contexts/Note/context';
import { Note } from '../../Note/Note'

export const NotePage = () => {
	const params = useParams('noteId')

	const { notes } = useContext(NotesContext)

	const note = notes.find((note) => note.id === params.noteId)

	return <div>
		<Note {...note} />
	</div>
}
