import PropTypes from 'prop-types';
import styles from './field.module.css';

export const FieldLayout = ({ field, onFieldClick, isGameEnded }) => {
	return (
		<div className={styles['field-container']}>
			{field.map((cell, index) => {
				return (
					<button
						key={index}
						className={styles.cell}
						disabled={isGameEnded}
						onClick={() => onFieldClick(index)}
					>
						{cell}
					</button>
				);
			})}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onFieldClick: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
};
