import {
	applyMiddleware,
	combineReducers,
	compose,
	legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { userMsgReducer } from './reducers/userMsgReducer';
import { weatherReducer } from './reducers/weatherReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	userMsgModule: userMsgReducer,
	weatherModule: weatherReducer,
});

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

window.gStore = store;
