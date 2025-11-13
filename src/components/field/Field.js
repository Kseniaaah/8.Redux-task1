import { useState, useEffect } from 'react';
import { FieldLayout } from './FieldLayout';
import { Store } from '../../store';

export const Field = ({onFieldClick}) => {
	const [, forceRender] = useState(0);

	useEffect(() => {
		const unsubscribe = Store.subscribe(() => {
			forceRender((x) => x + 1);
		})

		return unsubscribe;
	},[]);

	const { isGameEnded, field} = Store.getState();

	return (
		<FieldLayout
			field={field}
			onFieldClick={onFieldClick}
			isGameEnded={isGameEnded}
		/>
	)
};
