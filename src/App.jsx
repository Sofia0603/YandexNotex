import { BrowserRouter, Routes, Route } from 'react-router'
import { NotePage } from './pages/Note/NotePage';
import { Main } from './pages/Main/MainPage'

function App() {
	return (
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
	)
}

export default App
