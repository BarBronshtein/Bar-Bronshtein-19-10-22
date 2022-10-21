export function setUserMsg(msg) {
	return dispatch => {
		dispatch({ type: 'SET_MSG', msg });
		setTimeout(() => {
			dispatch({ type: 'SET_MSG', msg: null });
		}, 3000);
	};
}

export function clearMsg() {
	return dispatch => {
		dispatch({ type: 'SET_MSG', msg: null });
	};
}
