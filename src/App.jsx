import { Main } from './components/pages/Main/MainPage'
import { NotePage } from './components/pages/Note/NotePage'
import { NoteProvider } from './contexts/Note/Provider'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {
	return (
		<NoteProvider>
			<BrowserRouter>
				<Routes>
					<Route
						index
						element={<Main />}
					/>
					<Route
						path="note/:noteId"
						element={<NotePage />}
					/>
				</Routes>
			</BrowserRouter>
		</NoteProvider>
	)
}

export default App
