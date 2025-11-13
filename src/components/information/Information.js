import { useState, useEffect } from 'react';
import { InformationLayout } from './InformationLayout';
import { Store } from '../../store';

export const Information = () => {
	const [, forceRender] = useState(0);

	useEffect(() => {
		const unsubscribe = Store.subscribe(() => {
			forceRender((x) => {
				console.log(x);
				return x + 1
			});
		})

		return unsubscribe;
	},[]);

	const { currentPlayer, isGameEnded, isDraw } = Store.getState();

	let status;

	if (isDraw) {
		status = 'Ничья';
	} else if (isGameEnded) {
    	status = `Победа: ${currentPlayer}`;
  	} else {
    	status = `Ходит: ${currentPlayer}`;
  	}

	return <InformationLayout status={status} />
}
