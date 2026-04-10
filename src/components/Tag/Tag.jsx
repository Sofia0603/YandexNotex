import styles from './Tag.module.css'

export const Tag = ({ onClick, tag }) => {
	return (
		<button
			className={styles.tag}
			onClick={onClick}
		>
			{tag && tag.toLowerCase()}
		</button>
	)
}
