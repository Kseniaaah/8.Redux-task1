import { GameLayout } from './GameLayout';
import { Store } from './store';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export const Game = () => {
	const handleChangePlayer = (newPlayer) =>
		Store.dispatch({
			type: 'SET_CURRENT_PLAYER',
			payload: {
				player: newPlayer,
			},
		});

	const handleSetField = (targetIndex, currentPlayer) =>
		Store.dispatch({
			type: 'SET_FIELD',
			payload: {
				index: targetIndex,
				player: currentPlayer,
			},
		});

	const handleSetDraw = () => Store.dispatch({ type: 'SET_DRAW' });

	const handleRestart = () => Store.dispatch({ type: 'RESTART_GAME' });

	const handleEndGame = () => Store.dispatch({ type: 'SET_GAME_ENDED' });


	const checkWinner = (field) => {
		return WIN_PATTERNS.find(
			([a, b, c]) => field[a] !== '' && field[a] === field[b] && field[b] === field[c],
		);
	};

	const checkDraw = (field) => field.every((cell) => cell !== '');

	const changePlayer = (player) => handleChangePlayer(player === 'X' ? '0' : 'X');

	const onFieldClick = (index) => {
		const { currentPlayer, isGameEnded, field } = Store.getState();

		if (isGameEnded) return;
		if (field[index] !== '') return;


		handleSetField(index, currentPlayer);
		const { field: newField } = Store.getState();

		if (checkWinner(newField)) {
			handleEndGame();
			return;
		}

		if (checkDraw(newField)) {
			handleSetDraw();
			handleEndGame();
			return;
		}

		changePlayer(currentPlayer);

		console.log(Store.getState());
	};

	const onResetClick = () => {
		handleRestart();
	};

	return <GameLayout onFieldClick={onFieldClick} onResetClick={onResetClick} />;
};
