import { useContext, useCallback } from 'react'
import { Header } from '../../Header/Header'
import { NotesForm } from '../../NotesForm/NotesForm'
import styles from './MainPage.module.css'
import { NotesContext } from '../../../contexts/Note/context'
import { Notes } from '../../Notes/Notes';

export function Main() {
	const { notes, setNotes } = useContext(NotesContext)

	const onAddNote = useCallback(
		note => {
			setNotes([...notes, note])
		},
		[notes]
	)

	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<Header notesCount={notes.length} />
				<NotesForm onAddNote={onAddNote} />
				<Notes />
			</div>
		</div>
	)
}
