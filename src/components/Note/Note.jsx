import styles from './Note.module.css'
import { Trash } from 'lucide-react'
import { Tag } from '../Tag/Tag'
import { Modal } from '../Modal/Modal'
import { useState } from 'react'

export const Note = ({ title, content, tags, onDelete }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<>
			<div
				className={styles.note}
				onClick={() => setIsModalOpen(true)}
			>
				<div className={styles.header}>
					<h2 className={styles.title}>{title}</h2>
					<button
						className={styles.deleteButton}
						title="Удалить"
						onClick={onDelete}
					>
						<Trash
							size={20}
							color="#a3a3a3"
						/>
					</button>
				</div>
				<p className={styles.content}>{content}</p>
				<div className={styles.tags}>
					{tags.map((tag, index) => (
						<Tag
							key={index}
							tag={tag}
						/>
					))}
				</div>
			</div>
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			>
				<div className={styles.modalNote}>
					<h2 className={styles.modalTitle}>{title}</h2>
					<p className={styles.modalContent}>{content}</p>
					<div className={styles.modalTags}>
						{tags.map(tag => (
							<Tag key={tag} tag={tag}/>
						))}
					</div>
				</div>
			</Modal>
		</>
	)
}
