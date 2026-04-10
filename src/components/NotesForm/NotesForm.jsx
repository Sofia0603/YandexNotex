import styles from './NotesForm.module.css'
import { useState } from 'react'

export const NotesForm = function NotesForm({ onAddNote }) {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [tags, setTags] = useState('')
	const [error, setError] = useState('')

	const onSubmit = e => {
		e.preventDefault()

		if (!title.trim()) {
			setError('Необходимо указать заголовок')
			return
		}

		const note = {
			title,
			content,
			tags: tags.length ? tags.split(',') : [],
			id: Math.random().toString()
		}

		onAddNote(note)

		setTitle('')
		setContent('')
		setTags('')
	}

	return (
		<form className={styles.notesForm}>
			<input
				type="text"
				placeholder="Заголовок заметки"
				placeholder="Заголовок заметки"
				className={styles.inputField}
				value={title}
				onChange={event => {
					setTitle(event.target.value)
					if (error) {
						setError('')
					}
				}}
			/>
			{!!error.length && <span className={styles.error}>{error}</span>}

			<textarea
				placeholder="Содержание заметки"
				className={styles.inputField}
				value={content}
				onChange={event => setContent(event.target.value)}
			/>
			<input
				type="text"
				placeholder="Теги (через запятую)"
				className={styles.inputField}
				value={tags.trim().toString()}
				onChange={event => setTags(event.target.value)}
			/>
			<button
				className={styles.button}
				type="sumbit"
				onClick={onSubmit}
			>
				Добавить заметку
			</button>
		</form>
	)
}
