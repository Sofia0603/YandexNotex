import React from 'react'
import { NotesContext } from './context'
import { useState, useEffect } from 'react'

const STORAGE_KEY = 'notes'

export const NoteProvider = ({ children, storageKey = STORAGE_KEY }) => {

	const [notes, setNotes] = useState(() => {
		const savedNotes = localStorage.getItem(storageKey)
		return savedNotes ? JSON.parse(savedNotes) : []
	})

	useEffect(() => {
		localStorage.setItem(storageKey, JSON.stringify(notes))
	}, [notes])

	return (
		<NotesContext.Provider value={{ notes, setNotes }}>
			{children}
		</NotesContext.Provider>
	)
}
