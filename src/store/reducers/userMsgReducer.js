const INITIAL_STATE = {
	msg: {},
};

export function userMsgReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SET_MSG':
			return {
				...state,
				msg: action.msgType ? { type: action.msgType, txt: action.txt } : {},
			};
		default:
			return state;
	}
}
