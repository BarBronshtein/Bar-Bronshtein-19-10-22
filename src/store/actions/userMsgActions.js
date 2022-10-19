export function setUserMsg(msg) {
	return dispatch => {
		dispatch({ type: 'SET_MSG', msg });
		setTimeout(() => {
			dispatch({ type: 'SET_MSG' });
		}, 3000);
	};
}
