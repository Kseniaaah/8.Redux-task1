import { reducer, initialState } from "./reducer";

const createStore = (reducer, initialState) => {
	let state = initialState;
	let listeners = [];

	const subscribe = (listener) => {
		listeners.push(listener);

		return () => {
			const index = listeners.indexOf(listener);
			if (index !== -1) {
				listeners.splice(index, 1);
			}
		};
	}

	const dispatch = (action) => {
		state = reducer(state, action);
		listeners.forEach((listener) => listener());
	};

	const getState = () => state;

	return {
		dispatch,
		getState,
		subscribe
	};
};

export const Store = createStore(reducer, initialState);
