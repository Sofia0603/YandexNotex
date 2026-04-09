import styles from './App.module.css'
import { Header } from './components/Header/Header'

function App() {
	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<Header />
			</div>
		</div>
	)
}

export default App
