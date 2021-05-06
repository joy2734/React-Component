import { combineReducers } from 'redux';
import {
    CroudCounterReducer, 
    ProjectLeftCountReducer,
    ToggleReducer
} from './CroudCountReducer';
import {default as RewardCountReducer} from './RewardCountReducer';

export default combineReducers({
    CroudCounterReducer,
    ProjectLeftCountReducer,
    ToggleReducer
});