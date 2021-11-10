import counterReducer from './counter';
import loggedInReducer from './loggedIn';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    counter: counterReducer,
    loggedIn: loggedInReducer
})


export default reducers;