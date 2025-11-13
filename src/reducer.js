export const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: Array(9).fill(''),
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_CURRENT_PLAYER':
			return {
				...state,
				currentPlayer: payload.player,
			};
		case 'SET_FIELD':
			return {
				...state,
				field: state.field.map((cell, index) =>
					index === payload.index ? payload.player : cell,
				),
			};
		case 'SET_DRAW':
			return {
				...state,
				isDraw: true,
			};
		case 'RESTART_GAME':
			return initialState;
		case 'SET_GAME_ENDED':
			return {
				...state,
				isGameEnded: true,
			}
		default:
			return state;
	}
};
