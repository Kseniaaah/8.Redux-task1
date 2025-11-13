import styles from './information.module.css';

export const InformationLayout = ({status}) => {
	return (
		<div className={styles.information}>{status}</div>
	)
};
