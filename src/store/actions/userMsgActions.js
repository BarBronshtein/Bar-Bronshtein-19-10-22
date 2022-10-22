export function setUserMsg(msg) {
	return dispatch => {
		dispatch({ type: 'SET_MSG', msg });
	};
}

export function clearMsg() {
	return dispatch => {
		dispatch({ type: 'SET_MSG', msg: null });
	};
}
