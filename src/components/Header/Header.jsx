import styles from './Header.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>
				<span className={styles.ya}>Я</span>
				<span className={styles.text}>ндекс Заметки</span>
			</h1>

			<div className={styles.notesCount}>
				Всего заметок: <span id="notesCount">1</span>
			</div>
		</header>
	)
}
