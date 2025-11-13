import styles from './game.module.css';
import { Information } from './components/information/Information';
import { Field } from './components/field/Field';


export const GameLayout = ({
	onFieldClick,
	onResetClick,
}) => {
	return (
		<div className={styles['game-container']}>
			<Information />
			<Field onFieldClick={onFieldClick} />

			<button className={styles.reset} onClick={onResetClick}>
				Начать заново
			</button>
		</div>
	);
};

